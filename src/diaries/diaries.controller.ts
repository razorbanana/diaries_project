import { Controller, Get, Post, Put, Delete, Param, Patch, Body, ParseIntPipe, ValidationPipe, Query } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { DiariesService } from './diaries.service';
import { Prisma } from '@prisma/client';
import { EntriesService } from 'src/entries/entries.service';
import { ApiBody } from '@nestjs/swagger';


@Controller()
export class DiariesController {
    constructor(
        private readonly diariesService: DiariesService,
        private readonly entriesService: EntriesService 
    ){}

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
    @ApiBody({ type: [CreateDiaryDto] })
    createDiary(@Body() createDiary: CreateDiaryDto){
        return this.diariesService.createDiary(createDiary);
    }

    @Patch('my/:id')
    @ApiBody({ type: [UpdateDiaryDto] })
    updateDiary(@Param('id') id: number, @Body() updateDiary: UpdateDiaryDto){
        return this.diariesService.updateDiary(id, updateDiary);
    }

    @Delete('my/:id')
    async deleteDiary(@Param('id') id: number){
        await this.entriesService.deleteDiaryEntries(id);
        return this.diariesService.deleteDiary(id);
    }

    @Delete(':userId')
    async deleteUsersDiaries(@Param('userId') id: number){
        const userDiaries = await this.diariesService.getUsersDiaries(id)
        userDiaries.forEach(diary => {
            this.entriesService.deleteDiaryEntries(diary.id)
        })
        return this.diariesService.deleteUsersDiaries(id);
    }
}
