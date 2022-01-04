import { Module } from '@nestjs/common';
import { MakeModule } from 'src/make/make.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports : [UserModule,MakeModule],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
