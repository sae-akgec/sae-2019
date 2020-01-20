import { IsString, IsEmail, IsNumberString, IsNotEmpty, IsEmpty, Length, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDTO {

    @IsString()
    @Length(3, 300)
    @ApiProperty({ description: "Title of post. Min 3 Max 100, Required in POST", required: true })
    readonly title: String;

    @ApiProperty({ description: "Description of post", required:true })
    @IsString()
    @MinLength(3)
    readonly description: String;

    @ApiProperty({ description: "Description of post", required:true })
    @IsString()
    @MinLength(3)
    readonly slug: String;

    @IsString()
    @Length(3, 300)
    @ApiProperty({ description: "Short Description of post.Min 3 Max 300, Required in POST", required: true })
    readonly short_description: String;

    @ApiProperty({ description: "Image url of Post. Required in POST", required:true })
    @IsString()
    readonly img_url: String;

    @IsString()
    @ApiProperty({ description: "Category Id of post. Required in POST", required: true })
    readonly category_id: String;

    @ApiProperty({ description: "Post shop name. Required in POST" })
    readonly is_active: Boolean = true;
}