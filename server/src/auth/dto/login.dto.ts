import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsEmail()
  @ApiProperty({ required: true })
  readonly email: string;

  @IsString()
  @ApiProperty({ required: true })
  readonly password: string;
}
