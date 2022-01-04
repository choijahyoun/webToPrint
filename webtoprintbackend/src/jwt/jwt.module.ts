import { DynamicModule, Global, Module } from '@nestjs/common';
import { jwtModuleOptions } from './jwt-module-options.interface';
import { JwtService } from './jwt.service';


@Module({})
@Global()
export class JwtModule {
  static forRoot(options : jwtModuleOptions) : DynamicModule{
    return{
        module:JwtModule,
        exports : [JwtService],
        providers : [
          {
            provide : "optionPrivateKey",
            useValue : options,
          },
          JwtService,]
    };
  }
}
