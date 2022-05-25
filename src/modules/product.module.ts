import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from 'src/product/product.controller';
import { ProductService } from 'src/product/product.service';
import { Product, ProductSchema } from 'src/Schemas/product.Schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
