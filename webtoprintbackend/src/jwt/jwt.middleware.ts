import { ExecutionContext, Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Response,Request, NextFunction } from "express";
import { UserService } from "src/user/user.service";

@Injectable()
export class JwtMiddleware implements NestMiddleware{
    constructor(private readonly jwtService : JwtService, private readonly userService : UserService){}
   async use(req :Request, res: Response, next : NextFunction){
        if('x-jwt-token' in req.headers){
            const token = req.headers['x-jwt-token'];
            try{
                const decoded = this.jwtService.verify(token.toString());
                if(typeof decoded ==='object' && decoded.hasOwnProperty('id')){
                    const user = await this.userService.getById(decoded['id']);
                    req['user']=user;
                }
            }
            catch(err){
                console.log("err", err);
            }
        }
        next();
    }
}
