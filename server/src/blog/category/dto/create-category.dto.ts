import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateCategoryDTO {
    
    @IsString()
    @Length(3, 20)
    @ApiModelProperty({ description:"Title of category. Min 3 Max 20, Required in POST", required: true})
    readonly title: string;
}