import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TeacherDocument = HydratedDocument<Teachers>;

@Schema()
export class Teachers {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop({ type: Types.ObjectId })
  schoolId: Types.ObjectId;
}

export const TeachersSchema = SchemaFactory.createForClass(Teachers);
