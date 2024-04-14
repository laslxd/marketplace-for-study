import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const prismaService = app.get(PrismaService);
  app.enableShutdownHooks()
  
  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(4200);
}
bootstrap();
