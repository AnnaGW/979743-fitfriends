import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
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
  providers: [UserService],
})
export class UserModule {}
