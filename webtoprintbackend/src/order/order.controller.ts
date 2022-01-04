import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/role/role.decorator';
import { User, UserRole } from 'src/user/entities/user.entity';
import { CreateOrderDto } from './dto/create.order.dto';
import { UpdateOrderDto } from './dto/update.order.dto';
import { OrderService } from './order.service';
// @Role([UserRole.Admin])을 @get()으로 해 놓고 userApi를 /user로 하였더니 모든 get메소드에서 관리자 권한이 필요하게 되었다. 따라서 관리자 api를 다르게 설정하는 것이 옳다.
@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Role([UserRole.Admin])
  @Get('admin')
  getAllOrder() {
    return this.orderService.getAllOrder();
  }

  @Role([UserRole.Admin])
  @Get('admin/:id')
  getOneOrder(@Param('id') orderId) {
    return this.orderService.getOneOrder(orderId);
  }

  @Role([UserRole.Admin])
  @Delete('admin/:id')
  deleteOrder(@Param('id') orderId) {
    return this.orderService.deleteOrder(orderId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/resentorder')
  getUserRecentOrder(@AuthUser() authuser: User) {
    return this.orderService.getUserRecentOrder();
  }

  // 유저 주문 전체
  @UseGuards(JwtAuthGuard)
  @Get()
  getUserOrder(@AuthUser() authuser: User) {
    return this.orderService.getUserOrder(authuser);
  }
  // 유저 주문 상세
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getOneUserOrder(@Param('id') orderId: number, @AuthUser() user) {
    return this.orderService.getOneUserOrder(orderId, user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createUserOrder(
    @Body() createOrderDto: CreateOrderDto,
    @AuthUser() authuser: User,
  ) {
    return this.orderService.createUserOrder(createOrderDto, authuser);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/update/:id')
  updateUserOrder(
    @Param('id') orderId: number,
    @AuthUser() authuser: User,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.orderService.updateUserOrder(orderId, authuser, updateOrderDto);
  }

  // 유저 주문 삭제
  @UseGuards(JwtAuthGuard)
  @Post('/delete/:id')
  deleteUserOrder(@Param('id') orderId: number, @AuthUser() AuthUser: User) {
    return this.orderService.deleteUserOrder(orderId, AuthUser);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/perChase/:id')
  purchaseUserOrder(@Param('id') orderId: number, @AuthUser() AuthUser: User) {
    return this.orderService.purchaseUserOrder(orderId, AuthUser);
  }
}
