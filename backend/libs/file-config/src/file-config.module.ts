import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import fileConfig from './file.config';
import mongoConfig from './mongo.config';

const ENV_FILE_PATH = 'apps/files/file.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [fileConfig, mongoConfig],
      envFilePath: ENV_FILE_PATH,
    }),
  ],
})
export class FileConfigModule {}
