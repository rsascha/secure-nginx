import { Injectable } from '@nestjs/common';
import { GetEnvironmentVariable } from './get-env-variable';

@Injectable()
export class AppService {
  getHello(query: GetEnvironmentVariable): string {
    const result = process.env[query.variable];
    return result;
  }
}
