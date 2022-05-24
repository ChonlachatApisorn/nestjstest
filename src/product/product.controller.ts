/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CreateProductDTO } from 'src/dto/product.dto';
import * as productService from './product.service';
import * as imageService  from './product.service';
import { Product } from 'src/Schemas/product.Schema';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { parse } from 'path';
import { editFileName, imageFileFilter } from 'src/middlewares/upload.middleware';

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

  // @Post()
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './src/product/upload/',
  //       filename: editFileName,
  //     }),
  //     fileFilter: imageFileFilter,
  //   }),
  // )
  // async uploadedFile(@UploadedFile() file) {
  //   const response = {
  //     originalname: file.originalname,
  //     filename: file.filename,
  //   };
  //   return response;
  // }

  // @Post('multiple')
  // @UseInterceptors(
  //   FilesInterceptor('image', 20, {
  //     storage: diskStorage({
  //       destination: './src/product/upload/',
  //       filename: editFileName,
  //     }),
  //     fileFilter: imageFileFilter,
  //   }),
  // )
  // async uploadMultipleFiles(@UploadedFiles() files) {
  //   const response = [];
  //   files.forEach(file => {
  //     const fileReponse = {
  //       originalname: file.originalname,
  //       filename: file.filename,
  //     };
  //     console.log(fileReponse)
  //     response.push(fileReponse);
  //   });
  //   return this
  // }

  // @Get(':imgpath')
  // seeUploadedFile(@Param('imgpath') image, @Res() res) {
  //   return res.sendFile(image, { root: './files' });
  // }
}
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file', {
  //   storage: diskStorage({
  //     destination: './upload/',
  //     filename: (req, file, cb) => {
  //       const filename: string = path.parse(file.originalname).name.replace(/\s/g,'') + uuidv4();
  //       const extension: string = path.parse(file.originalname).ext;

  //       cb(null, `${filename}${extension}`)
  //     }
  //   })
  // }))
  // // eslint-disable-next-line @typescript-eslint/ban-types
  // uploadfile(@UploadedFile() File): Observable<Object> {
  //   console.log(File);
  //   return of({imagePath: File.path});
  // }

  // @Controller('upload')
  // export class UploadController {
  // constructor(private ImageService: imageService.ImageService) {}

  // @Post('multiple')
  // @UseInterceptors(
  //   FilesInterceptor('image', 20, {
  //     storage: diskStorage({
  //       destination: './src/product/upload/',
  //       filename: editFileName,
  //     }),
  //     fileFilter: imageFileFilter,
  //   }),
  // )
  // async uploadMultipleFiles(@UploadedFiles() files) {
  //   const image = await this.ImageService.upload(files)
  // }
    