import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from 'express'
import { config } from 'dotenv';
config();

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'access'){

    private readonly logger = new Logger(AccessStrategy.name)

    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
            passReqToCallback: true
        })
    }

    validate(req: Request, payload: any ){
        return payload
    }
}