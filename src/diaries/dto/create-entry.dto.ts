import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateDiaryEntryDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsBoolean()
    isPublic: boolean;
}