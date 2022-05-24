import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  originalname: string;

  @Prop()
  filename: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
