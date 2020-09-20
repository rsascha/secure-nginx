import { Injectable } from '@nestjs/common';
import { GetEnvironmentVariableType, GetFileType, ExecuteShellCommandType } from './types';

@Injectable()
export class AppService {
  getEnvironmentVariable(query: GetEnvironmentVariableType): string {
    const result = process.env[query.variable];
    return result;
  }

  getFile(query: GetFileType): string {
    const fs = require('fs');
    const result = fs.readFileSync(query.path, 'utf-8');
    return result;
  }

  execShell(query: ExecuteShellCommandType): string {
    const execSync = require('child_process').execSync;
    return execSync(query.command).toString();
  }
}
