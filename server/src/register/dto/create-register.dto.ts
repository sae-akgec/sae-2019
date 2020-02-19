import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRegisterDTO {
    
    @IsString()
    @ApiProperty({ description:"Full name of Student. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly name: string;

    @IsEmail()
    @ApiProperty({ description:"Email of Student. Required in POST", required: true})
    readonly email: string;

    @IsNumberString()
    @ApiProperty({ description:"Phone Number of Student. Required in POST", required: true})
    readonly phone: string;

    // @IsString()
    // @ApiProperty({ description:"Domain of Student. Required in POST", required: true})
    // readonly domain: string;

    // @IsString()
    // @ApiProperty({ description:"Skills of Student. Required in POST", required: true})
    // readonly skills: string;

    @IsString()
    @ApiProperty({ description:"Student No of Student. Required in POST", required: true})
    readonly studentNo: string;

    @IsString()
    @ApiProperty({ description:"Branch of Student. Required in POST", required: true})
    readonly branch: string;

    // @IsString()
    // @ApiProperty({ description:"Usp of Student. Required in POST", required: true})
    // readonly usp: string;
}