import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from '@nestjs/jwt';
import * as jwt from "jsonwebtoken"
@Injectable()
export class JwtService {
    constructor(@Inject("optionPrivateKey") private readonly options : JwtModuleOptions ){}
    sign(payload : object) : string{
        return jwt.sign(payload, this.options.privateKey);
    }
    verify(token : string) {
        return jwt.verify(token, this.options.privateKey);
    }
}
