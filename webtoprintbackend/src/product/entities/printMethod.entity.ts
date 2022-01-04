import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class PrintMethod extends CoreEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  plusColor: string;

  @ManyToOne(() => Product, (product) => product.printMethod)
  product: Product;
}
