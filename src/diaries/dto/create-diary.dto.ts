import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDiaryDto {
    @ApiProperty({description: 'Title of the diary.', type: String, minLength: 1})
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiPropertyOptional({description: 'Is diary public or private.', type: Boolean, default: false})
    @IsBoolean()
    @IsOptional()
    isPublic: boolean;
}