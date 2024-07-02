import {
  Controller,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolDto } from './dto/school.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Types } from 'mongoose';

@Controller('school')
@ApiTags('School')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Create a new school' })
  @ApiResponse({
    status: 201,
    description: 'The school has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createSchoolDto: SchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all schools' })
  @ApiResponse({
    status: 200,
    description: 'The schools have been successfully retrieved.',
  })
  findAll() {
    return this.schoolService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a school by id' })
  @ApiResponse({
    status: 200,
    description: 'The school has been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'School not found.' })
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: Types.ObjectId) {
    return this.schoolService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Update a school by id' })
  @ApiResponse({
    status: 200,
    description: 'The school has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'School not found.' })
  @ApiParam({ name: 'id', type: String })
  update(@Param('id') id: Types.ObjectId, @Body() updateSchoolDto: SchoolDto) {
    return this.schoolService.update(id, updateSchoolDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a school by id' })
  @ApiResponse({
    status: 200,
    description: 'The school has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'School not found.' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: Types.ObjectId) {
    return this.schoolService.remove(id);
  }
}
