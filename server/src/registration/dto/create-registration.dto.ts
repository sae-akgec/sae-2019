import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateRegisterationDTO {

    //Team Details Schema
    @IsString()
    @ApiModelProperty({ description:"Full name of Team. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly TeamName: string;

    @IsString()
    @ApiModelProperty({ description:"Full name of Team. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly SelectWorkshop: string;


    @IsString()
    @ApiModelProperty({ description:"Team Id of Team. Required in POST", required: true})
    readonly leaderEmail: string;


    @IsString()
    @ApiModelProperty({ description:"Team Id of Team. Required in POST", required: true})
    readonly Email: string;

    @IsNumberString()
    @ApiModelProperty({ description:"No. of Team member. Required in POST", required: true})
    @Length(0, 1)
    readonly members: string;

    //member detail schema
    @IsString()
    @ApiModelProperty({ description:"Full name of Student. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly Name: string;

    // @IsEmail()
    // @ApiModelProperty({ description:"Email of Student. Required in POST", required: true})
    // readonly email: string;

    @IsNumberString()
    @ApiModelProperty({ description:"Phone Number of Student. Required in POST", required: true})
    readonly PhoneNumber: string;


    @IsString()
    @ApiModelProperty({ description:"Student No of Student. Required in POST", required: true})
    readonly StudentNumber: string;

    @IsString()
    @ApiModelProperty({ description:"Branch of Student. Required in POST", required: true})
    readonly Branch: string;

    // @IsNumberString()
    // @ApiModelProperty({ description:"Phone Number of Student. Required in POST", required: true})
    // readonly year: string;

    @IsString()
    @ApiModelProperty({ description:"college name of member. Required in POST", required: true})
    readonly CollegeName : string;

    




    
}