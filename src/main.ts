import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//async function bootstraps application
async function bootstrap() {
  //.create() returns an application object, which fulfills the INestApplication interface
  // creates an nest application 
  const app = await NestFactory.create(AppModule);
  //start up HTTP listener
  await app.listen(3000);
}

bootstrap();
