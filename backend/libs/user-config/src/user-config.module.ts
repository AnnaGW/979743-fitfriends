import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import userConfig from './user.config';
import mongoConfig from './mongo.config';
import jwtConfig from './jwt/jwt.config';

const ENV_USERS_FILE_PATH = 'apps/users/user.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [userConfig, mongoConfig, jwtConfig],
      envFilePath: ENV_USERS_FILE_PATH,
    }),
  ],
})
export class UserConfigModule {}
