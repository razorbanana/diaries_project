import { Controller, Get, Post, Put, Delete, Param, Patch, Body, ParseIntPipe, ValidationPipe, Query } from '@nestjs/common';
import { CreateDiaryEntryDto } from './dto/create-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-entry.dto';
import { DiariesService } from './diaries.service';

@Controller('diaries')
export class DiariesController {
    constructor(private readonly diariesService: DiariesService){}

    @Get()  
    getDiaries() {
        return this.diariesService.getDiaries();
    }

    @Get('my')
    getMyDiary(@Query('publicOnly') publicOnly: boolean) {
        return this.diariesService.getMyDiary(publicOnly);
    }

    @Get(':id')
    getDiary(@Param('id', ParseIntPipe) id: number){
        return this.diariesService.getDiary(id);
    }

    @Post('my')
    createDiaryEntry(@Body(ValidationPipe) createDiaryEntry: CreateDiaryEntryDto){
        return this.diariesService.createDiaryEntry(createDiaryEntry);
    }

    @Patch('my/:id')
    updateDiaryEntry(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateDiaryEntry: UpdateDiaryEntryDto){
        return this.diariesService.updateDiaryEntry(id, updateDiaryEntry);
    }

    @Delete('my/:id')
    deleteDiaryEntry(@Param('id', ParseIntPipe) id: number){
        return this.diariesService.deleteDiaryEntry(id);
    }
}
