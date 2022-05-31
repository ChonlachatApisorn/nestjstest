import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/Schemas/product.Schema';
import { CreateProductDTO } from 'src/dto/product.dto';


@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private ProductModel: Model<ProductDocument>) {}

  async create(createProductDTO: CreateProductDTO): Promise<Product> {
    console.log(createProductDTO)
    const createProduct = await this.ProductModel.create(createProductDTO);
    console.log(createProduct)
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
