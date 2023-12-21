import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthzController {
  @Get('/healthz')
  public healthz() {
    return {
      status: 'ok'
    };
  }
}
