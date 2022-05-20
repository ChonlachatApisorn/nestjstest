import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import * as productService from './product.service';

@Controller('product')
export class ProductController {
  constructor(private ProductService: productService.ProductService) {}

  // find All & search by name
  @Get()
  getProductAll(@Query('name') productName?: string): ProductDTO[] {
    if (productName) {
      return this.ProductService.findByCondition((product) =>
        product.name.includes(productName),
      );
    }
    return this.ProductService.findAll();
  }

  // find by ID
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.ProductService.findByID(Number(id));
  }
}
