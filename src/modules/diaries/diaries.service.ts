import { Injectable, Logger } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/modules/database/database.service';
import { DiariesRepository } from '../../repositories/diaries.repository';
import { EntriesRepository } from 'src/repositories/entries.repository';

@Injectable()
export class DiariesService {
    constructor(
        private diariesRepository: DiariesRepository
    ) {}

    private readonly logger = new Logger(DiariesService.name)


    async getUserDiaries(userId: number) {
        this.logger.log('Fetching user`s diaries')
        return this.diariesRepository.getDiaries({where: {userId: userId}});
    }

    async getDiary(id: number) {
        this.logger.log('Fetching diary')
        return this.diariesRepository.getDiary({where: {id}});
    }

    async createDiary(userId:number, diaryData: CreateDiaryDto) {
        this.logger.log('Creating diary')
        const createData = {
            ...diaryData,
            user: { connect: { id: userId } }
        }
        return this.diariesRepository.createDiary({data: createData});
    }

    async updateDiary(id: number, updateBody: UpdateDiaryDto) {
        this.logger.log('Updating diary')
        return this.diariesRepository.updateDiary({where:{id}, data: updateBody});
    }

    async deleteDiary(id: number) {
        this.logger.log('Deleting diary')
        return this.diariesRepository.deleteDiary({where: {id}});
    }


}
