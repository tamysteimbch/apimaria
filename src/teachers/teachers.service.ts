import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teachers } from './entities/teacher.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teachers.name) private teacherModel: Model<Teachers>,
  ) {}

  create(createTeacherDto: CreateTeacherDto): Promise<Teachers> {
    const createdTeacher = new this.teacherModel(createTeacherDto);
    return createdTeacher.save();
  }

  findAll() {
    return this.teacherModel.find();
  }

  findOne(id: Types.ObjectId) {
    return this.teacherModel.findById(id);
  }

  update(id: Types.ObjectId, updateTeacherDto: UpdateTeacherDto) {
    return this.teacherModel.findByIdAndUpdate(id, updateTeacherDto, {
      new: true,
    });
  }

  remove(id: Types.ObjectId) {
    return this.teacherModel.findByIdAndDelete(id);
  }
}
