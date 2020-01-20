import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDTO {

    @IsString()
    @Length(3, 300)
    @ApiProperty({ description: "Name of user commenting. Min 3 Max 100, Required in POST", required: true })
    readonly name: String;

    @ApiProperty({ description: "Email of user commenting. Required in POST", required:true })
    @IsEmail()
    readonly email: String;

    @ApiProperty({ description: "Subject of comment. Required in POST", required:true })
    @IsString()
    readonly subject: String;

    @IsString()
    @ApiProperty({ description: "Short Description of comment. Required in POST", required: true })
    readonly description: String;
}