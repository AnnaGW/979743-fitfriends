import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@backend/user';
import { UserConfigModule, getMongooseOptions } from '@backend/user-config';
import { TrainingModule } from '@backend/training';

@Module({
  imports: [
    UserModule,
    UserConfigModule,
    TrainingModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
