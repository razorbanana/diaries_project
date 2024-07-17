import { ExecutionContext, Logger } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class AccessGuard extends AuthGuard('access') {
    private readonly logger = new Logger(AccessGuard.name)

    canActivate(context: ExecutionContext) : boolean | Promise<boolean> | Observable<boolean>{
        // const request = context.switchToHttp().getRequest()
        // console.log(request.headers)
        return super.canActivate(context)
    }
}