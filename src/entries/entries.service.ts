import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { EntriesRepository } from './entries.repository';

@Injectable()
export class EntriesService {
    constructor(private entriesRepository: EntriesRepository){}

    private readonly logger = new Logger(EntriesService.name)

    async getDiaryEntries(id: number){
        this.logger.log('Fetching all entries of diary')
        return this.entriesRepository.getEntries({where: {diaryId: id}})
    }

    async getSingleEntry(id: number){
        this.logger.log('Fetching entry')
        return this.entriesRepository.getEntry({where:{id}})
    }

    async createEntry(createBody: CreateEntryDto, diaryId: number){
        this.logger.log('Creating entry')
        const newEntry = {
            ...createBody,
            diary: { connect: { id: diaryId } }
        }
        return this.entriesRepository.createEntry({data: newEntry})
    }

    async updateEntry(id: number, updateBody: UpdateEntryDto){
        this.logger.log('Updating entry')
        return this.entriesRepository.updateEntry({where: {id}, data: updateBody})
    }

    async deleteEntry(id: number){
        this.logger.log('Deleting entry')
        return this.entriesRepository.deleteEntry({where: {id}})
    }
}
