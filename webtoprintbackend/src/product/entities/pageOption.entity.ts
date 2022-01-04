import { CoreEntity } from 'src/common/entities/core.entity';
import { PageOptionDetail } from 'src/order/entities/pageOptionDetail.entity';
import { Column, Entity, JoinColumn, ManyToMany, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class PageOption extends CoreEntity {
  @Column()
  pageOption: string;

  @OneToMany(
    () => PageOptionDetail,
    (pageOptionDetail) => pageOptionDetail.pageOption,
    {
      cascade: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ referencedColumnName: 'pageOption_id' })
  pageOptionDetail!: PageOptionDetail[];

  @ManyToMany(() => Product, (product) => product.pageOption)
  product: Product[];
}
