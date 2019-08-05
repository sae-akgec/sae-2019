import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length, MinLength } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateCommentDTO {

    @IsString()
    @Length(3, 300)
    @ApiModelProperty({ description: "Name of user commenting. Min 3 Max 100, Required in POST", required: true })
    readonly name: String;

    @ApiModelProperty({ description: "Email of user commenting. Required in POST", required:true })
    @IsEmail()
    readonly email: String;

    @ApiModelProperty({ description: "Subject of comment. Required in POST", required:true })
    @IsString()
    readonly subject: String;

    @IsString()
    @ApiModelProperty({ description: "Short Description of comment. Required in POST", required: true })
    readonly description: String;
}