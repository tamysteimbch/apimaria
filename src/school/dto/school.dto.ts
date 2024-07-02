import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SchoolDto {
  @ApiProperty({ description: 'The name of the teacher', example: 'John' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The phone number of the teacher',
    example: '+55 16 99999-9999',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'The address of School',
    example: 'Rua xxxx, número 1111, Curitiba - Paraná',
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}
