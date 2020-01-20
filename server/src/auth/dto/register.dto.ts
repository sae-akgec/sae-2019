import { IsEmail, IsString, Length, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @IsEmail()
  @ApiProperty({ description:"User Email must be unique", required: true})
  readonly email: String;

  @Length(8, 20)
  @ApiProperty({ description:"Password must be minimum of 8 digit long", required: true})
  password: String;

  @IsString()
  @Length(3, 30, { message: "Title is too long or short" })
  @ApiProperty({ description:"First Name of user", required: true})
  readonly first_name: String;

  @ApiProperty({ description:"User Email must be unique"})
  @MaxLength(50, { message: "Title is too long" })
  readonly last_name: String;
}
