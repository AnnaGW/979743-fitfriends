import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import trainingConfig from './training.config';
import mongoConfig from './mongo.config';

const ENV_TRAININGS_FILE_PATH = 'apps/trainings/trainings.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [trainingConfig, mongoConfig],
      envFilePath: ENV_TRAININGS_FILE_PATH,
    }),
  ],
})
export class TrainingConfigModule {}
