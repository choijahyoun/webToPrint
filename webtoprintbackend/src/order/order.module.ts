import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { PageOptionDetail } from './entities/pageOptionDetail.entity';
import { PostProcessOrder } from './entities/postProcessOrder.entity';
import { Binding } from 'src/product/entities/binding.entity';
import { Docu_spec } from 'src/product/entities/docu_spec.entity';
import { PageOption } from 'src/product/entities/pageOption.entity';
import { Paper } from 'src/product/entities/paper.entity';
import { Process } from 'src/product/entities/process.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      PageOptionDetail,
      PostProcessOrder,
      Binding,
      Docu_spec,
      PageOption,
      Paper,
      Process,
    ]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
