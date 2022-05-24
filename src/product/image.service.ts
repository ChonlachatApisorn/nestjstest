/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateImageDTO } from "src/dto/images.dto";
import { ImageDocument, Image } from "src/Schemas/image.Schema";

@Injectable()
export class ImageService {
  constructor(@InjectModel(Image.name) private ImageModel: Model<ImageDocument>) {}

  async upload(createImageDTO: CreateImageDTO): Promise<Image> {
    const createImage = await this.ImageModel.create(createImageDTO);
    return createImage
  }
}