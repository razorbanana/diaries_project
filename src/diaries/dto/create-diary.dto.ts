import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateDiaryDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsBoolean()
    isPublic: boolean;
}