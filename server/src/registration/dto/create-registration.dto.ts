import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length,ValidateNested, IsArray } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export class CreateMemberRegistrationDTO{
    //member detail schema
    @IsString()
    @ApiModelProperty({ description:"Full name of Student. Min 3 Max 50, Required in POST", required: true})
    @Length(3, 50)
    readonly Name: string;

    @IsEmail()
    @ApiModelProperty({ description:"Email of Student. Required in POST", required: true})
    readonly Email: string;

    @IsNumberString()
    @ApiModelProperty({ description:"Phone Number of Student. Required in POST", required: true})
    readonly PhoneNumber: string;
    
    @IsString()
    @ApiModelProperty({ description:"Student No of Student. Required in POST", required: true})
    readonly StudentNumber: string;

    @IsString()
    @ApiModelProperty({ description:"Branch of Student. Required in POST", required: true})
    readonly Branch: string;

    @IsString()
    @ApiModelProperty({ description:"college name of member. Required in POST", required: true})
    readonly CollegeName : string;    
}
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


    @IsEmail()
    @ApiModelProperty({ description:"Team Id of Team. Required in POST", required: true})
    readonly Email: string;

    @IsNumberString()
    @ApiModelProperty({ description:"No. of Team member. Required in POST", required: true})
    @Length(0, 1)
    readonly plan: string;



    @IsNotEmpty()
    @IsArray()
    @ApiModelProperty({
      isArray: true,
      type: CreateMemberRegistrationDTO ,
    })
    @ValidateNested({ each: true })
    @Type(() => CreateMemberRegistrationDTO)
     teamArray: CreateMemberRegistrationDTO[];
}

export function IsNonPrimitiveArray(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
      registerDecorator({
        name: 'IsNonPrimitiveArray',
        target: object.constructor,
        propertyName,
        constraints: [],
        options: validationOptions,
        validator: {
          validate(value: any, args: ValidationArguments) {
            return (
              Array.isArray(value) &&
              value.reduce(
                (acc, el) => acc && typeof el === 'object' && !Array.isArray(el),
                true,
              )
            );
          },
        },
      });
    };
  }
  