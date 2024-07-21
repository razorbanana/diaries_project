import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEntryDto {
    @ApiProperty({description: 'Title of the entry.', type: String, minLength: 1})
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({description: 'Content of the entry.', type: String, minLength: 1})
    @IsString()
    @IsNotEmpty()
    content: string;
}