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
  imageDescription(@Body() body: { image: string }): Promise<string> {
    const base64Img = body.image
    return this.uploadService.imageDescription(base64Img)
  }
}
