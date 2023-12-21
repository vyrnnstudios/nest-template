import { Module } from '@nestjs/common';

import { HealthzController } from '@vyrnn/nest-template/modules/healthz/controllers/http/HealthzController';

@Module({
  controllers: [ HealthzController ]
})
export class HealthzModule {}
