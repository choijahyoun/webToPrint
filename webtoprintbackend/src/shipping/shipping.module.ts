import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { ShippingDestination } from './entities/shipping.entity';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';
// 배송지 관련 api 
@Module({
  imports: [TypeOrmModule.forFeature([ShippingDestination,User])],
  controllers: [ShippingController],
  providers: [ShippingService]
})
export class ShippingModule {}
