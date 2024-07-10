import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { DiariesService } from 'src/diaries/diaries.service';
import { ApiBody } from '@nestjs/swagger';

@Controller()
export class UsersController {
    constructor(
        private readonly usersService:UsersService,
        private readonly diariesService:DiariesService
    ) {}

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(":id") 
    getUser(@Param('id') id: number){
        return this.usersService.getUser(id);
    }

    @Post('register')
    @ApiBody({ type: [CreateUserDto] })
    createUser(@Body() data: CreateUserDto){
        return this.usersService.createUser(data);
    }

    @Patch(":id")
    @ApiBody({ type: [UpdateUserDto] })
    updateUser(@Param('id') id: number, @Body() data: UpdateUserDto){
        return this.usersService.updateUser(id, data);
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: number){
        await this.diariesService.deleteUsersDiaries(id);
        return this.usersService.deleteUser(id);
    }

}
