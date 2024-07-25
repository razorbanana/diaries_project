import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { DiariesService } from 'src/modules/diaries/diaries.service';
import { ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { UserWithoutPassword } from 'src/common/types/user.type';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Controller()
export class UsersController {
    constructor(
        private readonly usersService:UsersService
    ) {}

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get('my')
    @UseGuards(JwtAuthGuard)
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

    @Patch('password')
    @UseGuards(JwtAuthGuard)
    updateMyPassword(@Req() req: Request & { user: UserWithoutPassword }, @Body() data: UpdatePasswordDto){
        const userId = req.user.id
        return this.usersService.updatePassword(userId, data)
    }

    @Patch('my')
    @UseGuards(JwtAuthGuard)
    updateMyUser(@Req() req: Request & { user: UserWithoutPassword }, @Body() data: UpdateUserDto){
        const userId = req.user.id
        return this.usersService.updateUser(userId, data)
    }

    @Patch(":id")
    @ApiBody({ type: [UpdateUserDto] })
    updateUser(@Param('id') id: number, @Body() data: UpdateUserDto){
        return this.usersService.updateUser(id, data);
    }

    @Delete('my')
    @UseGuards(JwtAuthGuard)
    deleteMyUser(@Req() req: Request & { user: UserWithoutPassword }){
        const userId = req.user.id
        return this.usersService.deleteUser(userId);
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: number){
        return this.usersService.deleteUser(id);
    }

}
