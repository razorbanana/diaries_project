import { Controller, Get, Post, Put, Delete, Param, Patch, Body, ParseIntPipe, ValidationPipe, Query } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { DiariesService } from './diaries.service';
import { Prisma } from '@prisma/client';


@Controller()
export class DiariesController {
    constructor(private readonly diariesService: DiariesService){}

    @Get()  
    getDiaries() {
        return this.diariesService.getDiaries();
    }

    @Get('my')
    getMyDiary(@Query('isPrivate') isPrivate: boolean) {
        return this.diariesService.getMyDiary(isPrivate);
    }

    @Get(':id')
    getDiary(@Param('id') id: number){
        return this.diariesService.getDiary(id);
    }

    @Post('my')
    createDiary(@Body() createDiary: CreateDiaryDto){
        return this.diariesService.createDiary(createDiary);
    }

    @Patch('my/:id')
    updateDiary(@Param('id') id: number, @Body() updateDiary: UpdateDiaryDto){
        return this.diariesService.updateDiary(id, updateDiary);
    }

    @Delete('my/:id')
    deleteDiary(@Param('id') id: number){
        return this.diariesService.deleteDiary(id);
    }
}
