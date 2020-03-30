import { IsString, IsEmail, IsNumberString ,IsNotEmpty, IsEmpty, Length, } from "class-validator";
import{UseInterceptors ,UploadedFile } from '@nestjs/common'
import { ApiProperty } from "@nestjs/swagger";
import { Post } from "@nestjs/common";
import {FileInterceptor} from '@nestjs/platform-express'

export class CreateRegisterDTO {

    @IsNumberString()
    @ApiProperty({ description: "Roll number is required ", required: true })
    readonly universityNumber: string;


    @IsString()
    @ApiProperty({ description: "Student No of Student. Required in POST", required: true })
    readonly studentNo: string;

    @IsString()
    @ApiProperty({ description: "Full name of Student. Min 3 Max 50, Required in POST", required: true })
    @Length(3, 50)
    readonly name: string;

    @IsNumberString()
    @ApiProperty({ description: "Phone Number of Student. Required in POST", required: true })
    readonly phone: string;

    @IsString()
    @ApiProperty({ description: "Branch of Student. Required in POST", required: true })
    readonly branch: string;

    @IsString()
    @ApiProperty({ description: "Higher studies. Required in POST", required: true })
    readonly studies: string;

    @IsEmail()
    @ApiProperty({ description: "Email of Student. Required in POST", required: true })
    readonly email: string;
    @IsString()
    @ApiProperty({ description: "Higher studies. Required in POST", required: true })
    readonly proName1: string;
    @IsString()
    @ApiProperty({ description: "Higher studies. Required in POST", required: true })
    readonly proName2: string;
    @IsString()
    @ApiProperty({ description: "Higher studies. Required in POST", required: true })
    readonly year1: string;
    @IsString()
    @ApiProperty({ description: "Higher studies. Required in POST", required: true })
    readonly year2: string;


    // @Post('upload')
    // @UseInterceptors(FileInterceptor('image'))
    // uploadFile(@UploadedFile() fileSource) {
    //     console.log(fileSource);
    // }




    // @IsString()
    // @ApiProperty({ description:"Domain of Student. Required in POST", required: true})
    // readonly domain: string;

    // @IsString()
    // @ApiProperty({ description:"Skills of Student. Required in POST", required: true})
    // readonly skills: string;




    // @IsString()
    // @ApiProperty({ description: "Gender of Student. Required in POST", required: true })
    // readonly gender: string;

    // @IsString()
    // @ApiProperty({ description:"Usp of Student. Required in POST", required: true})
    // readonly usp: string;
}