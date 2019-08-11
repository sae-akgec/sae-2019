import { IsEmail, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsEmail()
  @ApiModelProperty({ required: true })
  readonly email: string;

  @IsString()
  @ApiModelProperty({ required: true })
  readonly password: string;
}
