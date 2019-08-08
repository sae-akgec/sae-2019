import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateRegisterDTO {
    
    @IsString()
    @ApiModelProperty({ description:"Full name of Student. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly name: string;

    @IsEmail()
    @ApiModelProperty({ description:"Email of Student. Required in POST", required: true})
    readonly email: string;

    @IsNumberString()
    @ApiModelProperty({ description:"Phone Number of Student. Required in POST", required: true})
    readonly phone: string;

    @IsString()
    @ApiModelProperty({ description:"Domain of Student. Required in POST", required: true})
    readonly domain: string;

    @IsString()
    @ApiModelProperty({ description:"Skills of Student. Required in POST", required: true})
    readonly skills: string;

    @IsString()
    @ApiModelProperty({ description:"Student No of Student. Required in POST", required: true})
    readonly studentNo: string;

    @IsString()
    @ApiModelProperty({ description:"Branch of Student. Required in POST", required: true})
    readonly branch: string;

    @IsString()
    @ApiModelProperty({ description:"Usp of Student. Required in POST", required: true})
    readonly usp: string;
}