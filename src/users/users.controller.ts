import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { DiariesService } from 'src/diaries/diaries.service';
import { ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { UserWithoutPassword } from 'src/common/types/user.type';

@Controller()
export class UsersController {
    constructor(
        private readonly usersService:UsersService
    ) {}

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get('my')
    getMyUser(@Req() req: Request & { user: UserWithoutPassword }){
        const user = req.user
        return user;
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

    @UseGuards(JwtAuthGuard)
    @Patch('my')
    updateMyUser(@Req() req: Request & { user: UserWithoutPassword }, @Body() data: UpdateUserDto){
        const userId = req.user.id
        return this.usersService.updateUser(userId, data)
    }

    @Patch(":id")
    @ApiBody({ type: [UpdateUserDto] })
    updateUser(@Param('id') id: number, @Body() data: UpdateUserDto){
        return this.usersService.updateUser(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('my')
    deleteMyUser(@Req() req: Request & { user: UserWithoutPassword }){
        const userId = req.user.id
        return this.usersService.deleteUser(userId);
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: number){
        return this.usersService.deleteUser(id);
    }

}
