import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeachersSchema, Teachers } from './entities/teacher.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Teachers.name, schema: TeachersSchema },
    ]),
  ],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
