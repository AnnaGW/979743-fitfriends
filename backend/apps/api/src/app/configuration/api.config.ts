import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export enum ApplicationServiceURL {
  Users = 'http://localhost:3333/api/user',
  Trainings = 'http://localhost:3334/api/training/create', //TODO: вынести в .env
}

export const HTTP_CLIENT_MAX_REDIRECTS = 5;
export const HTTP_CLIENT_TIMEOUT = 3000;

const DEFAULT_PORT = 3000;
const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

type Environment = (typeof ENVIRONMENTS)[number];

export interface ApiConfig {
  environment: string;
  port: number;
}

const validationSchema = Joi.object({
  environment: Joi.string()
    .valid(...ENVIRONMENTS)
    .required(),
  port: Joi.number().port().default(DEFAULT_PORT),
});

function validateConfig(config: ApiConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[Api Config Validation Error]: ${error.message}`);
  }
}

function getConfig(): ApiConfig {
  const config: ApiConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `${DEFAULT_PORT}`, 10),
  };
  console.log('process.env.PORT', config.port);
  validateConfig(config);
  return config;
}

export default registerAs('apiapp', getConfig);
