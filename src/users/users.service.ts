import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from './users.repository';
import { DiariesRepository } from 'src/diaries/diaries.repository';
import { EntriesRepository } from 'src/entries/entries.repository';

@Injectable()
export class UsersService {
    constructor(
        private usersRepository: UsersRepository,
        private diariesRepository: DiariesRepository,
        private entriesRepository: EntriesRepository,
        private jwtService: JwtService,
    ) {}

    private readonly logger = new Logger(UsersService.name)

    async getUsers(){
        this.logger.log('Fetching all users')
        return this.usersRepository.getUsers({})
    }

    async getUser(id: number){
        this.logger.log('Fetching user')
        return this.usersRepository.getUser({ where: { id } })
    }

    async createUser(data: CreateUserDto){
        this.logger.log('Creating user')
        return this.usersRepository.createUser({data})
    }

    async updateUser(id: number, data: UpdateUserDto){
        this.logger.log('Updating user')
        const response = await this.usersRepository.updateUser({where: {id}, data})
        const {password, ...user} = response
        return this.jwtService.sign(user);
    }

    async deleteUser(id: number){
        this.logger.log('Deleting user')
        await this.diariesRepository.getDiaries({where:{userId: id}}).then(diaries => {
            diaries.forEach(diary => {
                this.entriesRepository.deleteManyEntries({where:{diaryId:diary.id}})
            })
        })
        await this.diariesRepository.deleteManyDiaries({where: {userId: id}})
        return this.usersRepository.deleteUser({where:{id}})
    }
}
