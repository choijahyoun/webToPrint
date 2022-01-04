import { CoreEntity } from 'src/common/entities/core.entity';
import { PostProcessOrder } from 'src/order/entities/postProcessOrder.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';

import { Product } from './product.entity';

@Entity()
export class Process extends CoreEntity {
  @Column()
  kind: string;
  @Column()
  name: string;
  //기준부수
  @Column({ nullable: true })
  standard_circulation: string;
  //고시가
  @Column({ nullable: true })
  market_price: number;
  //할인율
  @Column({ nullable: true })
  discount_rate: number;
  //매입단가
  @Column({ nullable: true })
  purchase_unit_price: number;
  //마진율
  @Column({ nullable: true })
  margin_rate: number;
  //매출단가
  @Column({ nullable: true })
  sales_unit_price: number;

  @Column({ nullable: true })
  isCheck: boolean;

  @OneToMany(
    () => PostProcessOrder,
    (postProcessOrder) => postProcessOrder.postProcess,
  )
  postProcessOrder: PostProcessOrder[];

  @ManyToMany(() => Product, (product) => product.process)
  product: Product[];
}
