import { Body, Controller, Get, Post } from '@nestjs/common'

import { UploadService } from './upload.service'

@Controller()
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Get()
  getHello(): string {
    return this.uploadService.getHello();
  }

  @Post('upload')
  imageDescription(@Body() body: { image: string }): string {
    const base64Img = body.image
    console.log(base64Img)
    return this.uploadService.imageDescription(base64Img);
  }
}
