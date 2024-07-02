import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { QuestionAlternatives } from '../entities/question.entity';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'The content of the question',
    example: 'How much years do you have?',
  })
  @IsString()
  @IsNotEmpty()
  question: string;

  @ApiProperty({
    description: 'The value of the question',
    example: 10,
  })
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @ApiProperty({
    description: 'The level of the question',
    example: 'Fácil',
  })
  @IsString()
  @IsNotEmpty()
  level: 'Fácil' | 'Médio' | 'Difícil';

  @ApiProperty({
    description: 'The color of the question',
    example: '#E74C3C',
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    description: 'The image status of the question',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  hasImage: boolean;

  @ApiProperty({
    description: 'The alternatives of the question',
    example: [
      {
        option: 'A',
        text: 'Bla bla bla',
      },
      {
        option: 'B',
        text: 'Ble Ble Ble',
      },
      {
        option: 'C',
        text: 'Bli Bli Bli',
      },
      {
        option: 'D',
        text: 'Blo Blo Blo',
      },
    ],
  })
  @IsNotEmpty()
  alternatives: QuestionAlternatives[];

  @ApiProperty({
    description: 'The correct answer of the question',
    example: 'A',
  })
  @IsString()
  @IsNotEmpty()
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}
