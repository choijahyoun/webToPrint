import { Module } from '@nestjs/common';
import { MakeModule } from 'src/make/make.module';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports : [MakeModule],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
