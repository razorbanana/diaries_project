import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
    constructor(private readonly databaseModule: DatabaseService) {}

    getUsers(){
        return this.databaseModule.user.findMany(
            {
                where: {
                    visible: true
                }
            }
        );
    }

    createUser(data: Prisma.UserCreateInput){
        return this.databaseModule.user.create({
            data
        });
    }

    deleteUser(id: number){
        return this.databaseModule.user.delete({
            where: {
                id
            }
        });
    }
}
