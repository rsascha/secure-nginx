import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetEnvironmentVariable } from './get-env-variable';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getEnvironmentVariable(@Query() query: GetEnvironmentVariable): string {
    return this.appService.getHello(query);
  }
}
