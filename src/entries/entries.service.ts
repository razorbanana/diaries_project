import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import {DatabaseService} from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EntriesService {
    constructor(private databaseService: DatabaseService){}

    private readonly logger = new Logger(EntriesService.name)

    async getEntries(id: number){
        this.logger.log('Fetching all entries of diary')
        return this.databaseService.entry.findMany({
            where: {diaryId: id}
        })
    }

    async getSingleEntry(id: number){
        this.logger.log('Fetching entry')
        return this.databaseService.entry.findUnique({
            where: {id}
        })
    }

    async createEntry(createBody: CreateEntryDto, diaryId: number){
        this.logger.log('Creating entry')
        const newEntry = {
            diaryId,
            ...createBody
        }
        return this.databaseService.entry.create({
            data: newEntry
        })
    }

    async updateEntry(id: number, updateBody: UpdateEntryDto){
        this.logger.log('Updating entry')
        return this.databaseService.entry.update({where: {id}, data: updateBody});
    }

    async deleteEntry(id: number){
        this.logger.log('Deleting entry')
        return this.databaseService.entry.delete({where: {id}});
    }
}
