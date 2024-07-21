import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/modules/database/database.service";

@Injectable()
export class UsersRepository {
    constructor(private databaseService: DatabaseService){}

    async getUsers(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
      }){
        const { skip, take, cursor, where, orderBy } = params;
        return this.databaseService.user.findMany({ skip, take, cursor, where, orderBy })
    }

    async getUser(params: {
        where: Prisma.UserWhereUniqueInput;
      }){
        const { where } = params;
        return this.databaseService.user.findUnique({ where });
      }

    async createUser(params: {data: Prisma.UserCreateInput}){
        const { data } = params;
        return this.databaseService.user.create({data})
    }

    async updateUser(params: { where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput}){
        const { where, data } = params;
        return this.databaseService.user.update({
            where,
            data
        })
    }

    async deleteUser(params: {where: Prisma.UserWhereUniqueInput}){
        const { where } = params;
        return this.databaseService.user.delete({
            where
        })
    }

}