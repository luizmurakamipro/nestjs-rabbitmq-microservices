import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMqService } from './rabbit-mq.service';

@Module({
  imports:[ClientsModule.register([
    {
      name:'rabbit-mq-module',
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://tykgesen:B48Oc_DV2XzA5-mjo3Dc_aU9uf1lBAMu@woodpecker.rmq.cloudamqp.com/tykgesen'
        ],
        queue: 'rmq-nestjs',
      },
    },
  ]),],
  controllers: [],
  providers: [RabbitMqService],
  exports: [RabbitMqService]
})
export class RabbitMqModule {}
