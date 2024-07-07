import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService) {}

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('register')
    createUser(@Body() data: Prisma.UserCreateInput){
        return this.usersService.createUser(data);
    }

    @Delete(":id")
    deleteUser(@Param('id') id: number){
        return this.usersService.deleteUser(id);
    }

}
