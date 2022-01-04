import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductSort extends CoreEntity {
  @Column()
  positionName: string;

  @Column()
  sort: number;

  @ManyToOne(() => Product, (product) => product.productSort, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
