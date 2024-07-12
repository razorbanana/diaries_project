import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { LocalGuard } from 'src/common/guards/local.guard';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@Controller()
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req: Request){
        return req.user
    }

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request){
        return req.user
    }
}
