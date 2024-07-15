import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import {DatabaseService} from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EntriesService {
    constructor(private databaseService: DatabaseService){}

    async getEntries(id: number){
        return this.databaseService.entry.findMany({
            where: {diaryId: id}
        })
    }

    async getSingleEntry(id: number){
        return this.databaseService.entry.findUnique({
            where: {id}
        })
    }

    async createEntry(createBody: CreateEntryDto, diaryId: number){
        const newEntry = {
            diaryId,
            ...createBody
        }
        return this.databaseService.entry.create({
            data: newEntry
        })
    }

    async updateEntry(id: number, updateBody: UpdateEntryDto){
        return this.databaseService.entry.update({where: {id}, data: updateBody});
    }

    async deleteEntry(id: number){
        return this.databaseService.entry.delete({where: {id}});
    }
}
