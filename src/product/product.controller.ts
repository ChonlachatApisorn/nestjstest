/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateProductDTO } from 'src/dto/product.dto';
import * as productService from './product.service';
import { Product } from 'src/Schemas/product.Schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { image } from 'src/dto/images.dto';

@Controller('product')
export class ProductController {
  constructor(private ProductService: productService.ProductService) {}

  @Get()
  getProductAll() {
    return this.ProductService.findAll();
  }
  
  @Post()
  async create(@Body() createProductDTO: CreateProductDTO) {
    await this.ProductService.create(createProductDTO);
    return this.ProductService.findAll();
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

  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  uploadFile(
    @Body() body: image,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return{
      body,
      file: file.buffer.toString(),
    }
  }

}