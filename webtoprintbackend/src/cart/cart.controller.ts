import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create.cart.dto';
import { UpdateCartDto } from './dto/update.cart.dto';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getCart(@AuthUser() authuser: User) {
    return this.cartService.getCart(authuser);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createCart(@Body() createCartDto: CreateCartDto, @AuthUser() authuser: User) {
    return this.cartService.createCart(createCartDto, authuser);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  updateCart(
    @Body() updateCartDto: UpdateCartDto,
    @AuthUser() authuser: User,
    @Param('id') cartId: number,
  ) {
    return this.cartService.updateCart(updateCartDto, authuser, cartId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  deleteCart(@Param('id') cartId: number) {
    return this.cartService.deleteCart(cartId);
  }
}
