import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class DiariesRepository {
    constructor(private databaseService: DatabaseService){}

    async getDiaries(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DiaryWhereUniqueInput;
        where?: Prisma.DiaryWhereInput;
        orderBy?: Prisma.DiaryOrderByWithRelationInput;
      }){
        const { skip, take, cursor, where, orderBy } = params;
        return this.databaseService.diary.findMany({ skip, take, cursor, where, orderBy })
    }

    async getDiary(params: {where: Prisma.DiaryWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.diary.findUnique({
            where
        })
    }

    async createDiary(params: {data: Prisma.DiaryCreateInput}){
        const {data} = params;
        return this.databaseService.diary.create({data})
    }

    async updateDiary(params: {where: Prisma.DiaryWhereUniqueInput, data: Prisma.DiaryUpdateInput}){
        const {where, data} = params;
        return this.databaseService.diary.update({
            where,
            data
        })
    }

    async deleteDiary(params:{where: Prisma.DiaryWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.diary.delete({
            where
        })
    }

    async deleteManyDiaries(params: {where: Prisma.DiaryWhereInput}){
        const {where} = params;
        return this.databaseService.diary.deleteMany({
            where
        })
    }

}