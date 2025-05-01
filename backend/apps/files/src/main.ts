import { Logger, ValidationPipe } from '@nestjs/common';
import cors from 'cors';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  app.use(
    cors({
      credentials: true,
      origin: true,
    })
  );

  const configService = app.get(ConfigService);
  const port = configService.get('fileapp.port');

  // const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application Files is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
