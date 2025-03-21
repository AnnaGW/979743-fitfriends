import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserFactory } from './user.factory';
import { UserModel, UserSchema } from './user.model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { getJwtOptions } from '@backend/user-config';
import { JwtAccessStrategy } from '@backend/user-config';
import { JwtRefreshStrategy } from './jwt/jwt-refresh.strategy';
import { RefreshTokenModule } from './refresh-token-module/refresh-token.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    RefreshTokenModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    UserFactory,
    JwtAccessStrategy,
    JwtRefreshStrategy,
  ],
  exports: [UserRepository],
})
export class UserModule {}
