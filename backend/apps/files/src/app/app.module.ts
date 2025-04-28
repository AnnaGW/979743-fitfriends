import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileConfigModule, getMongooseOptions } from '@backend/file-config';
import { FileUploaderModule } from '@backend/file-uploader';

@Module({
  imports: [
    FileUploaderModule,
    FileConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
