import { Logger, ValidationPipe } from '@nestjs/common';
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

  const configService = app.get(ConfigService);
  const port = configService.get('apiapp.port');
  console.log('apiapp.port - ', port);

  // const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application api is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
