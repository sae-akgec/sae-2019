import { IsEmail, IsString, Length, MaxLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterDto {
  @IsEmail()
  @ApiModelProperty({ description:"User Email must be unique", required: true})
  readonly email: String;

  @Length(8, 20)
  @ApiModelProperty({ description:"Password must be minimum of 8 digit long", required: true})
  password: String;

  @IsString()
  @Length(3, 30, { message: "Title is too long or short" })
  @ApiModelProperty({ description:"First Name of user", required: true})
  readonly first_name: String;

  @ApiModelProperty({ description:"User Email must be unique"})
  @MaxLength(50, { message: "Title is too long" })
  readonly last_name: String;
}
