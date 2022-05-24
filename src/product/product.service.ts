/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/Schemas/product.Schema';
import { CreateProductDTO } from 'src/dto/product.dto';
// import { ImageDocument, Image } from 'src/Schemas/image.Schema';
// import { CreateImageDTO } from 'src/dto/images.dto';


@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private ProductModel: Model<ProductDocument>) {}

  async create(createProductDTO: CreateProductDTO): Promise<Product> {
    const createProduct = new this.ProductModel(createProductDTO);
    return createProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.ProductModel.find().exec();
  }

  async fineOne(id: string): Promise<Product> {
    return this.ProductModel.findOne({ _id: id}).exec();
  }

  async delete(id: string) {
    const deleteProduct = await this.ProductModel
      .findByIdAndRemove({ _id: id})
      .exec()
    return deleteProduct;
  }
}

// @Injectable()
// export class ImageService {
//   constructor(@InjectModel(Image.name) private ImageModel: Model<ImageDocument>) {}

//   async upload(createImageDTO: CreateImageDTO): Promise<Image> {
//     const createImage = await this.ImageModel.create(createImageDTO);
//     return createImage
//   }
// }