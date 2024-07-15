import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
        private readonly databaseService: DatabaseService,
        private jwtService: JwtService,
    ) {}

    private readonly logger = new Logger(UsersService.name)

    async getUsers(){
        this.logger.log('Fetching all users')
        return this.databaseService.user.findMany(
            {
                where: {
                    visible: true
                }
            }
        );
    }

    async getUser(id: number){
        this.logger.log('Fetching user')
        return this.databaseService.user.findUnique({
            where: {
                id
            }
        });
    }

    async createUser(data: CreateUserDto){
        this.logger.log('Creating user')
        return this.databaseService.user.create({
            data
        });
    }

    async updateUser(id: number, data: UpdateUserDto){
        this.logger.log('Updating user')
        const response = await this.databaseService.user.update({
            where: {
                id
            },
            data
        });
        const {password, ...user} = response
        return this.jwtService.sign(user);
    }

    async deleteUser(id: number){
        this.logger.log('Deleting user')
        await this.databaseService.diary.findMany({
            where:{
                userId: id
            }
        }).then(diaries => {
            diaries.forEach(diary => {
                this.databaseService.entry.deleteMany({
                    where: {
                        diaryId: diary.id
                    }
                })
            })
        })
        await this.databaseService.diary.deleteMany({
            where: {
                userId: id
            }
        })
        return this.databaseService.user.delete({
            where: {
                id
            }
        });
    }
}
