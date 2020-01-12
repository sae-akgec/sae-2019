import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateWorkshopDTO {

    //Workshop Details Schema
    @IsString()
    @ApiModelProperty({ description:"Full name of workshop. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly name: string;

    @IsString()
    @ApiModelProperty({ description:"Full name of plantitle. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly plan_title: string;

    @IsString()
    @ApiModelProperty({ description:"plan Price, Required in POST", required: true})
    @Length(3, 50)
    readonly planPrice: string;


    @IsString()
    @ApiModelProperty({ description:"team limit of required plan price. Required in POST", required: true})
    readonly team_limit: string;
    
}