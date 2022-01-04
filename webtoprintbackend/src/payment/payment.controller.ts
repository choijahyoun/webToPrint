import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor( private readonly paymentService : PaymentService){}

    @UseGuards(JwtAuthGuard)
    @Post(':id')
    orderPay(@Param('id') orderId : number, @AuthUser() authUser : User)
    {
        console.log('결제');
        return this.paymentService.payOrder(orderId , authUser)
    }
    
}
