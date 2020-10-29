import { Controller, Get, Post } from '@nestjs/common';
import { RabbitMqService } from './rabbit-mq/rabbit-mq.service';

@Controller('api/v1')
export class AppController {
  constructor(private readonly rabbitMQService: RabbitMqService) {}

  @Get('/h1')
  async getHello() {
    this.rabbitMQService.send('rabbit-mq-producer', {message: 'Hello, im producer. Welcome to my queue'});
    return {code: 200, message: 'Message has been sent to queue' };//'Message has been sent to queue';
  }

  @Get('/login')
  async login() {
    this.rabbitMQService.send('rabbit-mq-producer', {user: 'luiz', password: 'luiz'});
    return {code: 200, message: 'Message has been sent to queue' };//'Message has been sent to queue';
  }
}
