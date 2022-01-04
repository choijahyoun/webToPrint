import { CoreEntity } from 'src/common/entities/core.entity';
import { PageOption } from 'src/product/entities/pageOption.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class PageOptionDetail extends CoreEntity {
  @Column()
  pageOptionId: number;
  @Column()
  orderId: number;

  //페이지옵션용지
  @Column()
  pageOptionPaper: string;
  //페이지옵션 페이지수
  @Column()
  pageOptionNum: string;
  //인쇄도수
  @Column()
  seperation: string;
  //인쇄방식
  @Column()
  printMethod: string;

  @ManyToOne(() => Order, (order) => order.pageOptionDetail)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @ManyToOne(() => PageOption, (pageOption) => pageOption.pageOptionDetail)
  @JoinColumn({ name: 'pageOptionId' })
  pageOption: PageOption;
}
