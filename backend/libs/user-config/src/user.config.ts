import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const DEFAULT_PORT = 3000;
const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

type Environment = (typeof ENVIRONMENTS)[number];

export interface UserConfig {
  environment: string;
  port: number;
}

const validationSchema = Joi.object({
  environment: Joi.string()
    .valid(...ENVIRONMENTS)
    .required(),
  port: Joi.number().port().default(DEFAULT_PORT),
});

function validateConfig(config: UserConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[User Config Validation Error]: ${error.message}`);
  }
}

function getConfig(): UserConfig {
  const config: UserConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `${DEFAULT_PORT}`, 10),
  };

  validateConfig(config);
  return config;
}

export default registerAs('userapp', getConfig);
