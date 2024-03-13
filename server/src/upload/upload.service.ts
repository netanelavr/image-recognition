import axios from 'axios'

import { Injectable } from '@nestjs/common'

@Injectable({})
export class UploadService {
  getHello(): string {
    return 'Hello World!';
  }

  async imageDescription(base64Img: string): Promise<string> {
    const apiKey = "-----";
    const payload = {
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "What’s in this image?",
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Img}`,
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    };
    // return base64Img + 1
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        payload,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            }
        }
    );
      
      console.log(response.data.choices[0].message.content);
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error making request to OpenAI API', error);
      return 'Failure';
    }
  }
}
