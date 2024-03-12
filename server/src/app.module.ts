import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UploadController } from './upload/upload.controller'
import { UploadService } from './upload/upload.service'

@Module({
  imports: [],
  controllers: [AppController, UploadController],
  providers: [AppService, UploadService],
})
export class AppModule {}
