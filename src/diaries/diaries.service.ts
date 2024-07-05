import { Injectable } from '@nestjs/common';
import { CreateDiaryEntryDto } from './dto/create-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-entry.dto';

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
        }
    ];

    getDiaries() {
        return this.diaries.filter((diary) => diary.isPublic);
    }

    getMyDiary() {
        return this.diaries.reduce((acc: typeof this.diaries, diary) => {
            diary.userId == this.myId && acc.push(diary);
            return acc;
        }, []);
    }

    getDiary(id: number) {
        return this.diaries.find((diary) => diary.id == id);
    }

    createDiaryEntry(diaryEntry: CreateDiaryEntryDto) {
        let newId = this.diaries.length + 1;
        this.diaries.push({id:newId, ...diaryEntry});
        return {id:newId, ...diaryEntry};
    }

    updateDiaryEntry(id: number, diaryEntry: UpdateDiaryEntryDto) {
        let diary = this.getDiary(id);
        this.diaries = this.diaries.map((diary) => diary.id == id ? {...diary, ...diaryEntry} : diary);
        return {...diary, ...diaryEntry};
    }

    deleteDiaryEntry(id: number) {
        let diary = this.getDiary(id);
        this.diaries = this.diaries.filter((diary) => diary.id != id);
        return diary;
    }

}
