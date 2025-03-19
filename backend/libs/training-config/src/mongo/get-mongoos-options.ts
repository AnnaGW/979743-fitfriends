import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { getMongoConnectionString } from '@backend/helpers';

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          username: config.get<string>('dbtraining.user'),
          password: config.get<string>('dbtraining.password'),
          host: config.get<string>('dbtraining.host'),
          port: config.get<string>('dbtraining.port'),
          authDatabase: config.get<string>('dbtraining.authBase'),
          databaseName: config.get<string>('dbtraining.name'),
        }),
      };
    },
    inject: [ConfigService],
  };
}
