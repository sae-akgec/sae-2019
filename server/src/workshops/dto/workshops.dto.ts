import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length  ,IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateWorkshopDTO {

    //Workshop Details Schema
    @IsString()
    @ApiProperty({ description:"Full name of workshop. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly name: string;
    @IsArray()
    @ApiProperty({ description:" Required in POST", required: true})
    @Length(3, 50)
    readonly plans : string

@IsString()
@ApiProperty({ description:"Full name of plantitle. Min 3 Max 50, Required in POST", required: true})
@Length(3, 50)
readonly plan_title: string;

@IsString()
@ApiProperty({ description:"plan Price, Required in POST", required: true})
@Length(3, 50)  
readonly planPrice: string;


@IsString()
@ApiProperty({ description:"team limit of required plan price. Required in POST", required: true})
readonly team_limit: string;
}
// export class PlansArray {
//  }