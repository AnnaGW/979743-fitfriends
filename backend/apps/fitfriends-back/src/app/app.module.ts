import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@backend/user';
import { UserConfigModule, getMongooseOptions } from '@backend/user-config';

@Module({
  imports: [
    UserModule,
    UserConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
