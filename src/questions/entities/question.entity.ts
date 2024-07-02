import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Questions>;
export type QuestionAlternatives = {
  option: 'A' | 'B' | 'C' | 'D';
  text: string;
};

@Schema()
export class Questions {
  @Prop()
  question: string;

  @Prop()
  value: number;

  @Prop()
  level: 'Fácil' | 'Médio' | 'Difícil';

  @Prop()
  color: string;

  @Prop()
  hasImage: boolean;

  @Prop()
  alternatives: QuestionAlternatives[];

  @Prop()
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export const QuestionsSchema = SchemaFactory.createForClass(Questions);
