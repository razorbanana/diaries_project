import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Injectable()
export class EntriesService {
    private entries = [
        {
            id: 1,
            diaryId: 1,
            title: "First Entry",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            dateCreated: new Date(2022, 9, Math.floor(Math.random() * 30) + 1)
        },
        {
            id: 2,
            diaryId: 1,
            title: "Second Entry",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            dateCreated: new Date(2022, 9, Math.floor(Math.random() * 30) + 1)
        },
        {
            id: 3,
            diaryId: 2,
            title: "Third Entry",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            dateCreated: new Date(2022, 9, Math.floor(Math.random() * 30) + 1)
        },
        {
            id: 4,
            diaryId: 3,
            title: "Fourth Entry",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            dateCreated: new Date(2022, 9, Math.floor(Math.random() * 30) + 1)
        },
        {
            id: 5,
            diaryId: 3,
            title: "Fifth Entry",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            dateCreated: new Date(2022, 9, Math.floor(Math.random() * 30) + 1)
        },
        {
            id: 6,
            diaryId: 4,
            title: "Sixth Entry",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            dateCreated: new Date(2022, 9, Math.floor(Math.random() * 30) + 1)
        },
        {
            id: 7,
            diaryId: 4,
            title: "Seventh Entry",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            dateCreated: new Date(2022, 9, Math.floor(Math.random() * 30) + 1)
        }
    ]

    getEntries(id: number){
        return this.entries.filter(entry => entry.diaryId === id);
    }

    getSingleEntry(id: number){
        return this.entries.find(entry => entry.id === id);
    }

    createEntry(createBody: CreateEntryDto, diaryId: number){
        const newEntry = {
            id: this.entries.length + 1,
            diaryId,
            ...createBody,
            dateCreated: new Date()
        }
        this.entries.push(newEntry);
        return newEntry;
    }

    updateEntry(id: number, updateBody: UpdateEntryDto){
        let entry = this.getSingleEntry(id);
        if (!entry) throw new NotFoundException(`entry with ID ${id} not found`);
        this.entries = this.entries.map((entry) => entry.id == id ? {...entry, ...updateBody} : entry);
        return {...entry, ...updateBody};
    }

    deleteEntry(id: number){
        let entry = this.getSingleEntry(id);
        if (!entry) throw new NotFoundException(`entry with ID ${id} not found`);
        this.entries = this.entries.filter(entry => entry.id !== id);
        return entry;
    }
}
