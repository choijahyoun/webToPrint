import { CoreEntity } from 'src/common/entities/core.entity';
import { Process } from 'src/product/entities/process.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class PostProcessOrder extends CoreEntity {
  @Column()
  orderId: number;

  @Column()
  postProcessId: number;

  @ManyToOne(() => Order, (order) => order.postProcessOrder)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @ManyToOne(() => Process, (postProcess) => postProcess.postProcessOrder)
  @JoinColumn({ name: 'postProcessId' })
  postProcess: Process;
}
