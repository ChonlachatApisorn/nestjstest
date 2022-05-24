/* eslint-disable prettier/prettier */
import { Controller, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName,imageFileFilter } from "src/middlewares/upload.middleware";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as ImageService from "./image.service";

@Controller("upload")
export class UploadController {
  constructor(private readonly ImageService:ImageService.ImageService) {}

  @Post("multiple")
  @UseInterceptors(
    FilesInterceptor("image", 20, {
      storage: diskStorage({
        destination: "./src/product/upload/",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    console.log(files)
    const image = await this.ImageService.upload(files);
    console.log(image)
    return image;
  }
}
