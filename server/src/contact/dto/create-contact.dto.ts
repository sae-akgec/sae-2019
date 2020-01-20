import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDTO {
    
    @IsString()
    @ApiProperty({ description:"Full name of contact. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly name: string;

    @IsEmail()
    @ApiProperty({ description:"Email of contact. Required in POST", required: true})
    readonly email: string;

    @IsNumberString()
    @ApiProperty({ description:"Phone Number of contact. Required in POST", required: true})
    readonly phone: string;

    @IsNotEmpty()
    @ApiProperty({ description:"Description of contact. Required in POST", required: true})
    readonly description: string;

    @IsString()
    @ApiProperty({ description:"Subject of contact. Required in POST", required: true})
    readonly subject: string;
}