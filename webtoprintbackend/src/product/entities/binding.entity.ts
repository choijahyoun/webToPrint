import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Binding extends CoreEntity {
  @Column()
  direction: string;

  @Column()
  method: string;

  @OneToMany(() => Order, (order) => order.binding)
  order: Order[];

  @ManyToMany(() => Product, (product) => product.binding)
  product: Product[];
}
