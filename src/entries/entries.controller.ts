import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Controller()
export class EntriesController {
    constructor(private readonly entriesService: EntriesService){}

    @Get('single/:id')
    getSingleEntry(@Param('id') id: number){
        return this.entriesService.getSingleEntry(id);
    }

    @Get(':id')
    getEntries(@Param('id') id: number){
        return this.entriesService.getEntries(id);
    }

    @Post(':id')
    createEntry(@Param('id') id: number, @Body() createEntry: CreateEntryDto){
        return this.entriesService.createEntry(createEntry, id);
    }

    @Patch('single/:id')
    updateEntry(@Param('id') id: number, @Body() updateEntry: UpdateEntryDto){
        return this.entriesService.updateEntry(id, updateEntry);
    }

    @Delete('single/:id')
    deleteEntry(@Param('id') id: number){
        return this.entriesService.deleteEntry(id);
    }

    @Delete(':id')
    deleteDiaryEntries(@Param('id') id: number){
        return this.entriesService.deleteDiaryEntries(id);
    }
}
