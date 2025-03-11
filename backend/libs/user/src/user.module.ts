import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserFactory } from './user.factory';
// import { JwtModule } from '@nestjs/jwt';
// import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // JwtModule.registerAsync({
    //   inject: [ConfigService],
    //   useFactory: getJwtOptions,
    // }),
  ],
  controllers: [UserController],
  // providers: [UserService, JwtAccessStrategy],
  providers: [UserService, UserRepository, UserFactory],
  exports: [UserRepository],
})
export class UserModule {}
