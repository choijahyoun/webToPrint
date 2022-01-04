import { CoreEntity } from 'src/common/entities/core.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Binding } from './binding.entity';
import { Docu_spec } from './docu_spec.entity';
import { MediumCategory } from './mediumCategory.entity';
import { PageOption } from './pageOption.entity';
import { Paper } from './paper.entity';
import { PrintMethod } from './printMethod.entity';
import { Process } from './process.entity';
import { ProductSort } from './sort.entity';

@Entity()
export class Product extends CoreEntity {
  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  imgName: string;

  @Column({ nullable: true })
  imgLocation: string;

  @Column({ nullable: true })
  offset: string;

  @OneToMany(() => PrintMethod, (printMethod) => printMethod.product)
  printMethod: PrintMethod[];

  @OneToMany(() => ProductSort, (productSort) => productSort.product, {
    cascade: true,
  })
  productSort: ProductSort[];

  @Column({ nullable: true })
  quantity: string;

  @ManyToMany(() => Binding, (binding) => binding.id, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  binding: Binding[];

  @ManyToMany(() => Docu_spec, (docuspec) => docuspec.id, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  docuspec: Docu_spec[];

  @ManyToMany(() => PageOption, (pageOption) => pageOption.id, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  pageOption: PageOption[];

  @ManyToMany(() => Paper, (paper) => paper.id, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  paper: Paper[];

  @ManyToMany(() => Process, (process) => process.id, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  process: Process[];

  @ManyToOne(() => MediumCategory, (mediumCategory) => mediumCategory.product, {
    onDelete: 'CASCADE',
  })
  mediumCategory: MediumCategory;
}
