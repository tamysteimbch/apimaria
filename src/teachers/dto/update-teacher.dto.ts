import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateTeacherDto {
  @ApiProperty({ description: 'The name of the teacher', example: 'John' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'The last name of the teacher', example: 'Doe' })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({
    description: 'The phone number of the teacher',
    example: '+55 16 99999-9999',
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'The email address of the teacher',
    example: 'john.doe@example.com',
  })
  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;
}
