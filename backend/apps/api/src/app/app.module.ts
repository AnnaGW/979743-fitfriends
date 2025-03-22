import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiConfigModule } from './configuration/api-config.module';
import { UsersApiController } from './users-api.controller';
import {
  HTTP_CLIENT_MAX_REDIRECTS,
  HTTP_CLIENT_TIMEOUT,
} from './configuration/api.config';

@Module({
  imports: [
    ApiConfigModule,
    HttpModule.register({
      timeout: HTTP_CLIENT_TIMEOUT,
      maxRedirects: HTTP_CLIENT_MAX_REDIRECTS,
    }),
  ],
  controllers: [UsersApiController],
  providers: [],
})
export class AppModule {}
