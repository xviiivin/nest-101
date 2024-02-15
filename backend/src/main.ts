import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggconfig = new DocumentBuilder()
    .setTitle('Nest101')
    .setDescription('Let try nest!!')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggconfig);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(3000);
}
bootstrap();
