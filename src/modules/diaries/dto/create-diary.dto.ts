import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import e from 'express';

export class CreateDiaryDto {
    @ApiProperty({description: 'Title of the diary.', type: String, minLength: 1})
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({description: 'Title of the diary.', type: String})
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty({description: 'Title of the diary.', enum: ['general', 'work', 'family', 'rest']})
    @IsString()
    @IsOptional()
    category: string;

    @ApiPropertyOptional({description: 'Is diary public or private.', type: Boolean, default: false})
    @IsBoolean()
    @IsOptional()
    isPrivate: boolean;
}