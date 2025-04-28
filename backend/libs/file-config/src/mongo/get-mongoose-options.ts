import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { getMongoConnectionString } from '@backend/helpers';

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          username: config.get<string>('dbfiles.user'),
          password: config.get<string>('dbfiles.password'),
          host: config.get<string>('dbfiles.host'),
          port: config.get<string>('dbfiles.port'),
          authDatabase: config.get<string>('dbfiles.authBase'),
          databaseName: config.get<string>('dbfiles.name'),
        }),
      };
    },
    inject: [ConfigService],
  };
}
