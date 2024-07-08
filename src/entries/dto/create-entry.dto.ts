import { IsNotEmpty, IsString } from "class-validator";

export class CreateEntryDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}