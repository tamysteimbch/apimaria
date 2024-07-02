import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Questions } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Questions.name) private questionModel: Model<Questions>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return createdQuestion.save();
  }

  findAll() {
    return this.questionModel.find();
  }

  findOne(id: Types.ObjectId) {
    return this.questionModel.findById(id);
  }

  update(id: Types.ObjectId, updateQuestionDto: CreateQuestionDto) {
    return this.questionModel.findByIdAndUpdate(id, updateQuestionDto, {
      new: true,
    });
  }

  remove(id: Types.ObjectId) {
    return this.questionModel.findByIdAndDelete(id);
  }
}
