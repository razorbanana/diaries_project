import { Controller, Get, Post, Delete, Param, Patch, Body, Query, UseGuards, Req } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { DiariesService } from './diaries.service';
import { Request } from 'express';
import { EntriesService } from 'src/entries/entries.service';
import { ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { UserWithoutPassword } from 'src/common/types/user.type';


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

    @UseGuards(JwtAuthGuard)
    @Get('my')
    getMyDiary(@Req() req: Request & { user: UserWithoutPassword }, @Query('isPrivate') isPrivate: boolean) { 
        const userId = req.user.id
        return this.diariesService.getMyDiary(userId, isPrivate);
    }

    @Get(':id')
    getDiary(@Param('id') id: number){
        return this.diariesService.getDiary(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('my')
    @ApiBody({ type: [CreateDiaryDto] })
    createDiary(@Req() req: Request & { user: UserWithoutPassword }, @Body() createDiary: CreateDiaryDto){
        const userId = req.user.id
        return this.diariesService.createDiary(userId, createDiary);
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
