import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DiariesService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getDiaries() {
        return this.databaseService.diary.findMany();
    }

    async getMyDiary(userId: number, isPrivate: boolean) {
        return this.databaseService.diary.findMany(
            {
                where: {
                    userId: userId,
                    isPrivate
                }
            }
        );
    }

    async getUsersDiaries(userId: number) {
        return this.databaseService.diary.findMany({where: {userId}});
    }

    async getDiary(id: number) {
        return this.databaseService.diary.findUnique({where: {id}});
    }

    async createDiary(userId:number, diaryData: CreateDiaryDto) {
        const createData = {
            ...diaryData,
            userId: userId
        }
        return this.databaseService.diary.create({data:createData});
    }

    async updateDiary(id: number, updateBody: UpdateDiaryDto) {
        return this.databaseService.diary.update({where: {id}, data: updateBody});
    }

    async deleteDiary(id: number) {
        return this.databaseService.diary.delete({where: {id}});
    }

    async deleteUsersDiaries(userId: number) {
        return this.databaseService.diary.deleteMany({where: {userId}});
    }

}
