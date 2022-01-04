import { toUnicode } from 'punycode';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { LargeCategory } from './largeCategory.entity';
import { Product } from './product.entity';

@Entity()
export class MediumCategory extends CoreEntity {
  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  checked: boolean;

  //보이기 여부
  @Column({ default: false })
  isShow: boolean;

  @ManyToOne(
    () => LargeCategory,
    (largeCategory) => largeCategory.mediumCategory,
    { onDelete: 'CASCADE' },
  )
  largeCategory: LargeCategory;

  @OneToMany(() => Product, (product) => product.mediumCategory, {
    cascade: true,
  })
  product: Product[];
}
