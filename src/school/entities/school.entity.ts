import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SchoolDocument = HydratedDocument<School>;

@Schema()
export class School {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;
}

export const SchoolSchema = SchemaFactory.createForClass(School);
