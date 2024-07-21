import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/modules/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../../repositories/users.repository';


@Injectable()
export class UsersService {
    constructor(
        private usersRepository: UsersRepository,
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
        return this.usersRepository.deleteUser({where:{id}})
    }
}
