import { Controller, Get, Post, Put, Delete, Param, Patch, Body, ParseIntPipe, ValidationPipe, Query } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
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
    createDiary(@Body(ValidationPipe) createDiary: CreateDiaryDto){
        return this.diariesService.createDiary(createDiary);
    }

    @Patch('my/:id')
    updateDiary(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateDiary: UpdateDiaryDto){
        return this.diariesService.updateDiary(id, updateDiary);
    }

    @Delete('my/:id')
    deleteDiary(@Param('id', ParseIntPipe) id: number){
        return this.diariesService.deleteDiary(id);
    }
}
