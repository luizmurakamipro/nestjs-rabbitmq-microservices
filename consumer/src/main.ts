import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://tykgesen:B48Oc_DV2XzA5-mjo3Dc_aU9uf1lBAMu@woodpecker.rmq.cloudamqp.com/tykgesen'
      ],
      queue: 'rmq-nestjs',
      noAck: false, // false = manul acknowlegment; true = automatic acknowledgment
      prefetchCount: 1
    }
  });
  await app.listenAsync();
}
bootstrap();
