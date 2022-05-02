import { Module, Global, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { RequestContextMiddleware } from './context/RequestContext.middleware';

@Global()
@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {

  public configure(consumer: MiddlewareConsumer): any {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }

}
