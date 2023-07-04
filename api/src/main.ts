import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getAllCORSHeaders } from 'supertokens-node';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://hotelsentral-staging.tth.asia'],
    allowedHeaders: ['content-type', ...getAllCORSHeaders()],
    credentials: true,
  });

  await app.listen(8080);
}
bootstrap();
