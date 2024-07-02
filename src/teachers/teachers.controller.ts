import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Types } from 'mongoose';

@Controller('teachers')
@ApiTags('Teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Create a new teacher' })
  @ApiResponse({
    status: 201,
    description: 'The teacher has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all teachers' })
  @ApiResponse({
    status: 200,
    description: 'Return all teachers.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a teacher by id' })
  @ApiResponse({
    status: 200,
    description: 'Return a teacher by id.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: Types.ObjectId) {
    return this.teachersService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Update a teacher' })
  @ApiResponse({
    status: 200,
    description: 'The teacher has been successfully updated.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiParam({ name: 'id', type: String })
  update(
    @Param('id') id: Types.ObjectId,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.teachersService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a teacher' })
  @ApiResponse({
    status: 200,
    description: 'The teacher has been successfully deleted.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: Types.ObjectId) {
    return this.teachersService.remove(id);
  }
}
