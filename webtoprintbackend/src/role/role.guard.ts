import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { User, UserRole } from "src/user/entities/user.entity";
import { AllowedRole } from "./role.decorator";


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector : Reflector){}


    canActivate(context : ExecutionContext):boolean{
        const requiredRoles = this.reflector.getAllAndOverride<UserRole>(
            'roles',
            [context.getHandler(),
            context.getClass(),
            ]);
        if(!requiredRoles){
            return true;
        }


        const request = context.switchToHttp().getRequest();
        const user:User = request['user'];
        if(!user)
        {
            return false;
        }

        if(requiredRoles.includes('Any'))
        {
            return true;
        }

        return requiredRoles.includes(user.role);

    }
        
}