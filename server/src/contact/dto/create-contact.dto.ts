import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateContactDTO {
    
    @IsString()
    @ApiModelProperty({ description:"Full name of contact. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly name: string;

    @IsEmail()
    @ApiModelProperty({ description:"Email of contact. Required in POST", required: true})
    readonly email: string;

    @IsNumberString()
    @ApiModelProperty({ description:"Phone Number of contact. Required in POST", required: true})
    readonly phone: string;

    @IsNotEmpty()
    @ApiModelProperty({ description:"Description of contact. Required in POST", required: true})
    readonly description: string;

    @IsString()
    @ApiModelProperty({ description:"Subject of contact. Required in POST", required: true})
    readonly subject: string;
}