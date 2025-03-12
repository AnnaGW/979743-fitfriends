import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserFactory } from './user.factory';
import { UserModel, UserSchema } from './user.model';
// import { JwtModule } from '@nestjs/jwt';
// import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
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
