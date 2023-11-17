import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  //controllers determine how incoming requests are handled
  //responsible for accepting incoming requests.. doing sum.. then returning response
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
