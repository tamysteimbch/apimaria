import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeacherDto {
  @ApiProperty({ description: 'The name of the teacher', example: 'John' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The last name of the teacher', example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'The phone number of the teacher',
    example: '+55 16 99999-9999',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'The email address of the teacher',
    example: 'john.doe@example.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The school ID associated with the teacher',
    example: '5f8d04be618aeb30507e9b7e',
  })
  @IsString()
  @IsNotEmpty()
  schoolId: string;
}
