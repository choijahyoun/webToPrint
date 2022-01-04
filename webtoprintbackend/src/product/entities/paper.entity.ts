import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Paper extends CoreEntity {
  @Column()
  paperName: string;

  @Column()
  paperColor: string;

  @Column()
  paperWeight: string;

  @Column()
  paperSize: string;

  //제조사
  @Column({ nullable: true })
  manufacturer: string;
  //매수
  @Column({ nullable: true })
  page_count: string;
  //선방입고
  @Column({ nullable: true })
  prior_arrial: boolean;
  //입고처
  @Column({ nullable: true })
  receiving_location: string;
  //종이유형
  @Column({ nullable: true })
  series: string;
  //종이결
  @Column({ nullable: true })
  grain: string;
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
  //창고
  @Column({ nullable: true })
  warehouse: string;
  //현재재고량
  @Column({ nullable: true })
  current_stock: string;
  //재고시작일자
  @Column({ nullable: true })
  start_stock_date: string;
  //시작재고량
  @Column({ nullable: true })
  start_stock: string;
  //시작재고금액
  @Column({ nullable: true })
  start_stock_price: string;
  //안전재고량
  @Column({ nullable: true })
  safety_stock: string;

  @OneToMany(() => Order, (order) => order.paper)
  order: Order[];

  @ManyToMany(() => Product, (product) => product.paper)
  product: Product[];
}
