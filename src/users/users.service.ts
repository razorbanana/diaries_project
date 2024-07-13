import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
        private readonly databaseModule: DatabaseService,
        private jwtService: JwtService,
    ) {}

    async getUsers(){
        return this.databaseModule.user.findMany(
            {
                where: {
                    visible: true
                }
            }
        );
    }

    async getUser(id: number){
        return this.databaseModule.user.findUnique({
            where: {
                id
            }
        });
    }

    async createUser(data: CreateUserDto){
        return this.databaseModule.user.create({
            data
        });
    }

    async updateUser(id: number, data: UpdateUserDto){
        const response = await this.databaseModule.user.update({
            where: {
                id
            },
            data
        });
        const {password, ...user} = response
        return this.jwtService.sign(user);
    }

    async deleteUser(id: number){
        return this.databaseModule.user.delete({
            where: {
                id
            }
        });
    }
}
