import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { School } from './entities/school.entity';
import { SchoolDto } from './dto/school.dto';
import { Types } from 'mongoose';

@Injectable()
export class SchoolService {
  constructor(@InjectModel(School.name) private schoolModel: Model<School>) {}

  create(createSchoolDto: SchoolDto): Promise<School> {
    const createdSchool = new this.schoolModel(createSchoolDto);
    return createdSchool.save();
  }

  findAll() {
    return this.schoolModel.find();
  }

  findOne(id: Types.ObjectId) {
    return this.schoolModel.findById(id);
  }

  update(id: Types.ObjectId, updateSchoolDto: SchoolDto) {
    return this.schoolModel.findByIdAndUpdate(id, updateSchoolDto, {
      new: true,
    });
  }

  remove(id: Types.ObjectId) {
    return this.schoolModel.findByIdAndDelete(id);
  }
}
