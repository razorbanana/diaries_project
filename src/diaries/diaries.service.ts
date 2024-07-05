import { Injectable } from '@nestjs/common';
import { CreateDiaryEntryDto } from './dto/create-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-entry.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class DiariesService {
    private myId = 1
    private diaries = [
        {
            id: 1,
            title: "First Entry",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            userId: 1,
            isPublic: true
        },
        {
            id: 2,
            title: "Second Entry",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            userId: 1,
            isPublic: false
        },
        {
            id: 3,
            title: "Third Entry",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            userId: 3,
            isPublic: true
        },
        {
            id: 4,
            title: "Fourth Entry",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            userId: 2,
            isPublic: true
        },
        {
            id: 5,
            title: "Fifth Entry",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            userId: 2,
            isPublic: false
        },
        {
            id: 6,
            title: "Sixth Entry",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            userId: 3,
            isPublic: true
        },
        {
            id: 7,
            title: "Seventh Entry",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            userId: 1,
            isPublic: true
        },
        {
            id: 8,
            title: "Eighth Entry",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            userId: 2,
            isPublic: false
        },
        {
            id: 9,
            title: "Ninth Entry",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            userId: 3,
            isPublic: true
        },
        {
            id: 10,
            title: "Tenth Entry",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            userId: 1,
            isPublic: true
        }
    ];

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
            diary.userId == this.myId && acc.push(diary);
            return acc;
        }, []);
    }

    getDiary(id: number) {
        const diary = this.diaries.find((diary) => diary.id == id);
        if (!diary) throw new NotFoundException(`Diary with ID ${id} not found`);
        return diary
    }

    createDiaryEntry(diaryEntry: CreateDiaryEntryDto) {
        let newId = this.diaries.length + 1;
        this.diaries.push({id:newId, userId: this.myId, ...diaryEntry});
        return {id:newId, ...diaryEntry};
    }

    updateDiaryEntry(id: number, diaryEntry: UpdateDiaryEntryDto) {
        let diary = this.getDiary(id);
        if (!diary) throw new NotFoundException(`Diary with ID ${id} not found`);
        this.diaries = this.diaries.map((diary) => diary.id == id ? {...diary, ...diaryEntry} : diary);
        return {...diary, ...diaryEntry};
    }

    deleteDiaryEntry(id: number) {
        let diary = this.getDiary(id);
        if (!diary) throw new NotFoundException(`Diary with ID ${id} not found`);
        this.diaries = this.diaries.filter((diary) => diary.id != id);
        return diary;
    }

}
