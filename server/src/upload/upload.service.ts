import axios from 'axios'

import { Injectable } from '@nestjs/common'

@Injectable({})
export class UploadService {
  getHello(): string {
    return 'Hello World!';
  }

  imageDescription(base64Img: string): string {
    console.log(base64Img)
    console.log(2)
    const apiKey = "-------------";
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
                // url: `data:image/jpeg;base64,${base64Img}`,
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    };
    return base64Img
    // try {
    //   const response = await axios.post(
    //     'https://api.openai.com/v1/chat/completions',
    //     payload,
    //     {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${apiKey}`,
    //         }
    //     }
    // );
    //   console.log(response);
    //   console.log(2);
    //   return 'Success';
    // } catch (error) {
    //   console.error('Error making request to OpenAI API', error);
    //   return 'Failure';
    // }
  }
}
