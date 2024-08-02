import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @ApiProperty({description: 'Title of the diary.', type: String, minLength: 1})
    @IsString()
    @IsNotEmpty()
    content: string;
    
    @ApiProperty({description: 'Id of entry.', type: Number})
    @IsNumber()
    @IsNotEmpty()
    entryId: number;
}
