import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/modules/database/database.service";

@Injectable()
export class CommentsRepository {
    constructor(private databaseService: DatabaseService){}

    async getComments(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CommentWhereUniqueInput;
        where?: Prisma.CommentWhereInput;
        orderBy?: Prisma.CommentOrderByWithRelationInput;
      }){
        const { skip, take, cursor, where, orderBy } = params;
        return this.databaseService.comment.findMany({ skip, take, cursor, where, orderBy })
    }

    async getComment(params: {where: Prisma.CommentWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.comment.findUnique({
            where
        })
    }

    async createComment(params: {data: Prisma.CommentCreateInput}){
        const {data} = params;
        return this.databaseService.comment.create({data})
    }

    async updateComment(params: {where: Prisma.CommentWhereUniqueInput, data: Prisma.CommentUpdateInput}){
        const {where, data} = params;
        return this.databaseService.comment.update({
            where,
            data
        })
    }

    async deleteComment(params:{where: Prisma.CommentWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.comment.delete({
            where
        })
    }

    async deleteManyComments(params: {where: Prisma.CommentWhereInput}){
        const {where} = params;
        return this.databaseService.comment.deleteMany({
            where
        })
    }

}