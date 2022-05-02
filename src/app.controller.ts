import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  constructor () {
  }

  @Get('test')
  public async test () {
    return 'B'
  }

}
