import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DiariesService {
    constructor(private readonly databaseModule: DatabaseService) {}
    private myId = 1

    async getDiaries() {
        return this.databaseModule.diary.findMany();
    }

    async getMyDiary(isPrivate: boolean) {
        return this.databaseModule.diary.findMany(
            {
                where: {
                    userId: this.myId,
                    isPrivate
                }
            }
        );
    }

    async getDiary(id: number) {
        return this.databaseModule.diary.findUnique({where: {id}});
    }

    async createDiary(diaryData: CreateDiaryDto) {
        const createData = {
            ...diaryData,
            userId: this.myId
        }
        return this.databaseModule.diary.create({data:createData});
    }

    async updateDiary(id: number, updateBody: UpdateDiaryDto) {
        return this.databaseModule.diary.update({where: {id}, data: updateBody});
    }

    async deleteDiary(id: number) {
        return this.databaseModule.diary.delete({where: {id}});
    }

}
