import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserRegisDocument = UserRegis & Document;

@Schema()
export class UserRegis {
  @Prop()
  username: string;

  @Prop()
  password: string;
}

export const UserRegisSchema = SchemaFactory.createForClass(UserRegis);
