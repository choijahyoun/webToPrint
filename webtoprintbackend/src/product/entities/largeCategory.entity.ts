import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { MediumCategory } from './mediumCategory.entity';

@Entity()
export class LargeCategory extends CoreEntity {
  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  checked: boolean;

  //보이기 여부
  @Column({ default: false })
  isShow: boolean;

  @OneToMany(
    () => MediumCategory,
    (mediumCategory) => mediumCategory.largeCategory,
    { cascade: true },
  )
  mediumCategory: MediumCategory[];
}
