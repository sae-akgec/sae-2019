import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDTO {
    
    @IsString()
    @Length(3, 20)
    @ApiProperty({ description:"Title of category. Min 3 Max 20, Required in POST", required: true})
    readonly title: string;
}