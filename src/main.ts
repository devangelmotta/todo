import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet'
import * as compression from 'compression'

const PORT = parseInt(process.env.PORT, 10) || 4000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' })
  app.useGlobalPipes(new ValidationPipe({}))
  app.enableVersioning({ type: VersioningType.URI })
  app.use(helmet())
  app.use(compression())

  const options = new DocumentBuilder()
    .setTitle('A Simple API')
    .setDescription('Un API en internet solo para ustedes')
    .setVersion('1.0')
    .addServer('https://todo-para-isa.zeabur.app/', 'Develop')
    .addTag('Todo')
    .addTag('Books')
    .build();

const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(PORT, () => {
    console.log(`🚀 Application running at port ${PORT}`)
  })
}
bootstrap();
