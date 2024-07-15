import { Injectable, Logger } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DiariesService {
    constructor(private readonly databaseService: DatabaseService) {}

    private readonly logger = new Logger(DiariesService.name)

    async getDiaries() {
        this.logger.log('Fetching all diaries')
        return this.databaseService.diary.findMany();
    }

    async getMyDiary(userId: number, isPrivate: boolean) {
        this.logger.log('Fetching my diaries')
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
        this.logger.log('Fetching user`s diaries')
        return this.databaseService.diary.findMany({where: {userId}});
    }

    async getDiary(id: number) {
        this.logger.log('Fetching diary')
        return this.databaseService.diary.findUnique({where: {id}});
    }

    async createDiary(userId:number, diaryData: CreateDiaryDto) {
        this.logger.log('Creating diary')
        const createData = {
            ...diaryData,
            userId: userId
        }
        return this.databaseService.diary.create({data:createData});
    }

    async updateDiary(id: number, updateBody: UpdateDiaryDto) {
        this.logger.log('Updating diary')
        return this.databaseService.diary.update({where: {id}, data: updateBody});
    }

    async deleteDiary(id: number) {
        this.logger.log('Deleting diary')
        await this.databaseService.entry.deleteMany({
            where: {
                diaryId: id
            }
        })
        return this.databaseService.diary.delete({where: {id}});
    }


}
