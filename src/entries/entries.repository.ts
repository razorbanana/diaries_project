import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class EntriesRepository {
    constructor(private databaseService: DatabaseService){}

    async getEntries(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EntryWhereUniqueInput;
        where?: Prisma.EntryWhereInput;
        orderBy?: Prisma.EntryOrderByWithRelationInput;
      }){
        const { skip, take, cursor, where, orderBy } = params;
        return this.databaseService.entry.findMany({ skip, take, cursor, where, orderBy })
    }

    async getEntry(params: {where: Prisma.EntryWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.entry.findUnique({
            where
        })
    }

    async createEntry(params: {data: Prisma.EntryCreateInput}){
        const {data} = params;
        return this.databaseService.entry.create({data})
    }

    async updateEntry(params: {where: Prisma.EntryWhereUniqueInput, data: Prisma.EntryUpdateInput}){
        const {where, data} = params;
        return this.databaseService.entry.update({
            where,
            data
        })
    }

    async deleteEntry(params: {where: Prisma.EntryWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.entry.delete({
            where
        })
    }

    async deleteManyEntries(params: {where: Prisma.EntryWhereInput}){
        const {where} = params;
        return this.databaseService.entry.deleteMany({
            where
        })
    }

}