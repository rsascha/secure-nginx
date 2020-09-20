import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ExecuteShellCommandType, GetEnvironmentVariableType, GetFileType } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('get-env')
  getEnvironmentVariable(@Query() query: GetEnvironmentVariableType): string {
    return this.appService.getEnvironmentVariable(query);
  }

  @Get('get-file')
  getFile(@Query() query: GetFileType): string {
    return this.appService.getFile(query);
  }

  @Get('exec-shell')
  execShell(@Query() query: ExecuteShellCommandType): string {
    return this.appService.execShell(query);
  }
}
