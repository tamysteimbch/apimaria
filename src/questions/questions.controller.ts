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
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Types } from 'mongoose';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('questions')
@ApiTags('Questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Create a new question' })
  @ApiResponse({
    status: 201,
    description: 'The question has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all questions' })
  @ApiResponse({
    status: 200,
    description: 'Return all questions.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a question by id' })
  @ApiResponse({
    status: 200,
    description: 'Return a question by id.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: Types.ObjectId) {
    return this.questionsService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Update a question' })
  @ApiResponse({
    status: 200,
    description: 'The question has been successfully updated.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiParam({ name: 'id', type: String })
  update(
    @Param('id') id: Types.ObjectId,
    @Body() updateQuestionDto: CreateQuestionDto,
  ) {
    return this.questionsService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a question' })
  @ApiResponse({
    status: 200,
    description: 'The question has been successfully deleted.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: Types.ObjectId) {
    return this.questionsService.remove(id);
  }
}
