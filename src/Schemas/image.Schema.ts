import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop()
  originalname: string;

  @Prop()
  filename: string;
}

export const ImageDocument = SchemaFactory.createForClass(Image);
