import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Controller('entries')
export class EntriesController {
    constructor(private readonly entriesService: EntriesService){}

    @Get(':id')
    getEntries(@Param('id', ParseIntPipe) id: number){
        return this.entriesService.getEntries(id);
    }

    @Get('single/:id')
    getSingleEntry(@Param('id', ParseIntPipe) id: number){
        return this.entriesService.getSingleEntry(id);
    }

    @Post(':id')
    createEntry(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) createEntry: CreateEntryDto){
        return this.entriesService.createEntry(createEntry, id);
    }

    @Patch('single/:id')
    updateEntry(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateEntry: UpdateEntryDto){
        return this.entriesService.updateEntry(id, updateEntry);
    }

    @Delete('single/:id')
    deleteEntry(@Param('id', ParseIntPipe) id: number){
        return this.entriesService.deleteEntry(id);
    }
}
