import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingModule } from '@backend/training';
import {
  TrainingConfigModule,
  getMongooseOptions,
} from '@backend/training-config';

@Module({
  imports: [
    TrainingModule,
    TrainingConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
