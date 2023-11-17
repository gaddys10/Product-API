import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// Empty args so it handles incoming requests to root route
// your-domain.com/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): { name: string } {
    return { name: 'Max' };
  }
}
