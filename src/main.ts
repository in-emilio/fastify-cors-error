import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
    let app: INestApplication;
    const fastifyAdapter = new FastifyAdapter({ caseSensitive: false });
    app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter, {
        cors: {
            origin: true,
            credentials: true
        }
    });
    await app.listen(3000);
}

bootstrap();
