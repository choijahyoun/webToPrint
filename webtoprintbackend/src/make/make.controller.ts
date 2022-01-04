import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

import { AuthUser } from 'src/auth/auth-user.decorator';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { JwtStrategy } from 'src/jwt/jwt.strategy';
import { multerOptions } from 'src/lib/multerOption';
import { Role } from 'src/role/role.decorator';
import { User, UserRole } from 'src/user/entities/user.entity';
import { CreateMakeDto } from './dto/create-make.dto';
import { UpdateMakeDto } from './dto/update-make.dto';
import { MakeService } from './make.service';

@ApiTags('make')
@Controller('make')
export class MakeController {
  constructor(private readonly makeService: MakeService) {}

  @Role([UserRole.Admin])
  @Get('/admin')
  getOrderAdmin() {
    return this.makeService.getOrderAdmin();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/resentorder')
  getRecentOrder(@AuthUser() authuser: User) {
    return this.makeService.getRecentOrder(authuser);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getOrder(@AuthUser() authuser: User) {
    return this.makeService.getOrder(authuser);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getOne(@Param('id') orderId: number) {
    return this.makeService.getOne(orderId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/update/:id')
  updateOrder(
    @Param('id') orderId: number,
    @Body() MakeData: UpdateMakeDto,
    @AuthUser() authuser: User,
  ) {
    return this.makeService.updateOrder(orderId, MakeData, authuser);
  }

  // 유저 주문 삭제
  @UseGuards(JwtAuthGuard)
  @Post('/delete/:id')
  userDeleteOrder(@Param('id') orderId: number) {
    return this.makeService.userDeleteOrder(orderId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createOrder(@Body() MakeData: CreateMakeDto, @AuthUser() authuser: User) {
    return this.makeService.createMake(MakeData, authuser);
  }

  @Role([UserRole.Admin])
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteOrder(@Param('id') orderId) {
    return this.makeService.deleteOrder(orderId);
  }
}
