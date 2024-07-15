import { Injectable, Logger } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { DatabaseService } from 'src/database/database.service';
import { JwtService } from '@nestjs/jwt';
require('dotenv').config()

@Injectable()
export class AuthService {
    constructor(
        private readonly databaseService: DatabaseService,
        private jwtService: JwtService,
    ) {}

    private readonly logger = new Logger(AuthService.name)

    async validateUser({username, password}: AuthPayloadDto){
        this.logger.log('Validating user')
        let findUser = await this.databaseService.user.findUnique({
            where: {
                email: username
            }
        })
        if(!findUser) {
            findUser = await this.databaseService.user.findUnique({
                where: {
                    name: username
                }
            })
        }
        if(!findUser) return null
        if (password === findUser.password){
            const {password, ...user} = findUser
            return this.jwtService.sign(user)
        }
    }

}
