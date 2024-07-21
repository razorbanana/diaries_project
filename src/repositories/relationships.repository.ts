import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/modules/database/database.service";

@Injectable()
export class RelationshipsRepository {
    constructor(private databaseService: DatabaseService){}

    async getRelationships(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.RelationshipWhereUniqueInput;
        where?: Prisma.RelationshipWhereInput;
        orderBy?: Prisma.RelationshipOrderByWithRelationInput;
      }){
        const { skip, take, cursor, where, orderBy } = params;
        return this.databaseService.relationship.findMany({ skip, take, cursor, where, orderBy })
    }

    async getRelationship(params: {where: Prisma.RelationshipWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.relationship.findUnique({
            where
        })
    }

    async createRelationship(params: {data: Prisma.RelationshipCreateInput}){
        const {data} = params;
        return this.databaseService.relationship.create({data})
    }

    async updateRelationship(params: {where: Prisma.RelationshipWhereUniqueInput, data: Prisma.RelationshipUpdateInput}){
        const {where, data} = params;
        return this.databaseService.relationship.update({
            where,
            data
        })
    }

    async deleteRelationship(params:{where: Prisma.RelationshipWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.relationship.delete({
            where
        })
    }

    async deleteManyRelationships(params: {where: Prisma.RelationshipWhereInput}){
        const {where} = params;
        return this.databaseService.relationship.deleteMany({
            where
        })
    }

}