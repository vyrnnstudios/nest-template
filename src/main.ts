import { Module } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';

import { FastifyAdapter } from '@nestjs/platform-fastify';

import { HealthzModule } from '@vyrnn/nest-template/modules/healthz/HealthzModule';

import { Environment } from '@somosprte/environment';

@Module({
  imports: [ HealthzModule ]
})
class Application {
  public static async boostrap() {
    NestFactory.create(Application, new FastifyAdapter()).then(server => {
      server.listen(Environment.getInt('PORT'));
    }).catch(console.error);
  }
}

Application.boostrap();
