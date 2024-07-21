import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/modules/database/database.service";

@Injectable()
export class SubscriptionsRepository {
    constructor(private databaseService: DatabaseService){}

    async getSubscriptions(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.SubscriptionWhereUniqueInput;
        where?: Prisma.SubscriptionWhereInput;
        orderBy?: Prisma.SubscriptionOrderByWithRelationInput;
      }){
        const { skip, take, cursor, where, orderBy } = params;
        return this.databaseService.subscription.findMany({ skip, take, cursor, where, orderBy })
    }

    async getSubscription(params: {where: Prisma.SubscriptionWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.subscription.findUnique({
            where
        })
    }

    async createSubscription(params: {data: Prisma.SubscriptionCreateInput}){
        const {data} = params;
        return this.databaseService.subscription.create({data})
    }

    async deleteSubscription(params:{where: Prisma.SubscriptionWhereUniqueInput}){
        const {where} = params;
        return this.databaseService.subscription.delete({
            where
        })
    }

    async deleteManySubscriptions(params: {where: Prisma.SubscriptionWhereInput}){
        const {where} = params;
        return this.databaseService.subscription.deleteMany({
            where
        })
    }

}