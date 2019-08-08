import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateCustomerDTO {
    
    @IsString()
    @ApiModelProperty({ description:"First name of customer. Min 3 Max 30, Required in POST", required: true})
    readonly first_name: string;
    
    @ApiModelProperty({ description:"Last name of customer. Max 30"})
    readonly last_name: string;

    @IsEmail()
    @ApiModelProperty({ description:"Email of customer. Required in POST", required: true})
    readonly email: string;

    @IsNumberString()
    @ApiModelProperty({ description:"Phone Number of customer. Required in POST", required: true})
    readonly phone: string;

    @IsNotEmpty()
    @ApiModelProperty({ description:"Address of customer. Required in POST", required: true})
    readonly address: string;

    @IsString()
    @ApiModelProperty({ description:"Customer shop name. Required in POST", required: true})
    readonly shop_name: string;
}