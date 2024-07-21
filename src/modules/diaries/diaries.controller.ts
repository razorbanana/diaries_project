import { Controller, Get, Post, Delete, Param, Patch, Body, Query, UseGuards, Req } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { DiariesService } from './diaries.service';
import { Request } from 'express';
import { EntriesService } from 'src/modules/entries/entries.service';
import { ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { UserWithoutPassword } from 'src/common/types/user.type';
import { AccessGuard } from 'src/common/guards/access.guard';


@Controller()
@UseGuards(JwtAuthGuard)
export class DiariesController {
    constructor( 
        private readonly diariesService: DiariesService
    ){}

    @Get('my')
    getMyDiaries(@Req() req: Request & { user: UserWithoutPassword }) { 
        const userId = req.user.id
        return this.diariesService.getUserDiaries(userId);
    }

    @Get(':id')
    @UseGuards(AccessGuard)
    getDiary(@Param('id') id: number){
        return this.diariesService.getDiary(id);
    }

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
        
        return this.diariesService.deleteDiary(id);
    }

}
