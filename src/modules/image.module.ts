import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadController } from 'src/product/image.controller';
// import { ImageService } from 'src/product/product.service';
import { ImageDocument, Image } from 'src/Schemas/image.Schema';
import { ImageService } from 'src/product/image.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Image.name, schema: ImageDocument }])],
    controllers: [UploadController],
    providers: [ImageService],
})
export class UploadModule {}
