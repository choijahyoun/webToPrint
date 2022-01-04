import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Docu_spec extends CoreEntity {
  //이름
  @Column()
  name: string;
  //종이유형
  @Column()
  series: string;
  //사이즈
  @Column()
  size: string;
  //절수
  @Column()
  cut: number;
  // 종이결
  @Column({ nullable: true })
  grain: string;

  @OneToMany(() => Order, (order) => order.docuSpec)
  order: Order[];

  @ManyToMany(() => Product, (product) => product.docuspec)
  product: Product[];
}
