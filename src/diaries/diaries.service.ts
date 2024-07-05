import { Injectable } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class DiariesService {
    private myId = 1
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

    private diaries = [
        { id: 1, userId: 1, title: "Diary 1", isPublic: true },
        { id: 2, userId: 1, title: "Diary 2", isPublic: false },
        { id: 3, userId: 2, title: "Diary 3", isPublic: true },
        { id: 4, userId: 2, title: "Diary 4", isPublic: true }
    ]

    getDiaries() {
        return this.diaries.filter((diary) => diary.isPublic);
    }

    getMyDiary(publicOnly: boolean) {
        if (publicOnly) {
            return this.diaries.reduce((acc: typeof this.diaries, diary) => {
                if (diary.userId == this.myId && diary.isPublic === true) acc.push(diary);
                return acc;
            }, []);
        }
        return this.diaries.reduce((acc: typeof this.diaries, diary) => {
            if (diary.userId == this.myId) acc.push(diary);
            return acc;
        }, []);
    }

    getDiary(id: number) {
        const diary = this.diaries.find((diary) => diary.id == id);
        if (!diary) throw new NotFoundException(`Diary with ID ${id} not found`);
        return diary
    }

    createDiary(diaryEntry: CreateDiaryDto) {
        let newId = this.diaries.length + 1;
        this.diaries.push({id:newId, userId: this.myId, ...diaryEntry});
        return {id:newId, ...diaryEntry};
    }

    updateDiary(id: number, updateBody: UpdateDiaryDto) {
        let diary = this.getDiary(id);
        if (!diary) throw new NotFoundException(`Diary with ID ${id} not found`);
        this.diaries = this.diaries.map((diary) => diary.id == id ? {...diary, ...updateBody} : diary);
        return {...diary, ...updateBody};
    }

    deleteDiary(id: number) {
        let diary = this.getDiary(id);
        if (!diary) throw new NotFoundException(`Diary with ID ${id} not found`);
        this.entries = this.entries.filter((entry) => entry.diaryId != id);
        this.diaries = this.diaries.filter((diary) => diary.id != id);
        return diary;
    }

}
