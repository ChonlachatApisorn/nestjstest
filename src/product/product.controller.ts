/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateProductDTO } from 'src/dto/product.dto';
import * as productService from './product.service';
import { Product } from 'src/Schemas/product.Schema';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('product')
export class ProductController {
  constructor(private ProductService: productService.ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getProductAll() {
    return this.ProductService.findAll();
  }
  
  @Post()
  async create(@Body() createProductDTO: CreateProductDTO) {
    const createNewProduct = await this.ProductService.create(createProductDTO);
    return createNewProduct;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.ProductService.fineOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.ProductService.delete(id)
    return `This Product was REMOVE !!`;
  }
}