import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3001',
    ],
    methods: ["GET", "POST"],
    credentials: false,
  })
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transforms query parameters into DTO types
      whitelist: true, // Strips out properties that aren't defined in the DTO
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
