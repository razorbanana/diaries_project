import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

    getUser(id: number){
        return this.databaseModule.user.findUnique({
            where: {
                id
            }
        });
    }

    createUser(data: CreateUserDto){
        return this.databaseModule.user.create({
            data
        });
    }

    updateUser(id: number, data: UpdateUserDto){
        return this.databaseModule.user.update({
            where: {
                id
            },
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
