import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/entities/user.entity';
import { CreateShippingDto } from './dto/create.shipping.dto';
import { UpdateShippingDto } from './dto/update.shipping.dto';
import { ShippingService } from './shipping.service';

@ApiTags('dilivery')
@Controller('dilivery')
export class  ShippingController {
    constructor(private readonly shippingServie : ShippingService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    getUserDilivery(@AuthUser() authuser : User){
        return this.shippingServie.getUserShipping(authuser);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createShipping(@Body() shippingData : CreateShippingDto, @AuthUser() authuser : User)
    {
        return this.shippingServie.createUserShipping(shippingData,authuser);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    deleteShipping(@Param() shippingId : number, @AuthUser() authuser : User)
    {
        return this.shippingServie.deleteShipping(shippingId,authuser)
    }

    @UseGuards(JwtAuthGuard)
    @Post('update/:id')
    updateShipping(@Body() updateShippingDto : UpdateShippingDto, @Param('id') shippingId : number, authuser: User)
    {
        console.log('배송지 수정');
        return this.shippingServie.updateUserShipping(authuser, shippingId, updateShippingDto);
    }
    
}
