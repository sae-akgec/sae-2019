import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDTO {
    
    @IsString()
    @ApiProperty({ description:"First name of customer. Min 3 Max 30, Required in POST", required: true})
    readonly first_name: string;
    
    @ApiProperty({ description:"Last name of customer. Max 30"})
    readonly last_name: string;

    @IsEmail()
    @ApiProperty({ description:"Email of customer. Required in POST", required: true})
    readonly email: string;

    @IsNumberString()
    @ApiProperty({ description:"Phone Number of customer. Required in POST", required: true})
    readonly phone: string;

    @IsNotEmpty()
    @ApiProperty({ description:"Address of customer. Required in POST", required: true})
    readonly address: string;

    @IsString()
    @ApiProperty({ description:"Customer shop name. Required in POST", required: true})
    readonly shop_name: string;
}