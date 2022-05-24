import { Module } from "@nestjs/common";
import { ProductModule } from "./modules/product.module";
import { MongooseModule } from "@nestjs/mongoose";
import { UploadModule } from "./modules/image.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://kra:internbackend@cluster0.wcryr.mongodb.net/test",
    ),
    ProductModule,
    UploadModule,
  ],
})
export class AppModule {}
