import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kra:internbackend@cluster0.wcryr.mongodb.net/test',
    ),
    ProductModule,
  ],
})
export class AppModule {}
