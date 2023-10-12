import { Injectable } from '@nestjs/common';
import { env } from 'env';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + env.ENV;
  }
}
