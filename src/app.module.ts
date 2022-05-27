import { Module } from "@nestjs/common";
import { ProductModule } from "./modules/product.module";
import { MongooseModule } from "@nestjs/mongoose";
import { UploadModule } from "./modules/image.module";
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://kra:internbackend@cluster0.wcryr.mongodb.net/test",
    ),
    ProductModule,
    UploadModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
})
export class AppModule {}
