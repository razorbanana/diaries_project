import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { Injectable, UnauthorizedException } from "@nestjs/common"
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super();
    }

    async validate(username: string, password: string): Promise<any>{
        console.log("LocalStrategy")
        const user = await this.authService.validateUser({username, password})
        return user
    }
}