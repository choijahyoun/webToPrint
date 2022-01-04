import { CoreEntity } from 'src/common/entities/core.entity';
import { FileUrl } from 'src/file/entities/file.entity';
import { Binding } from 'src/product/entities/binding.entity';
import { Docu_spec } from 'src/product/entities/docu_spec.entity';
import { Paper } from 'src/product/entities/paper.entity';
import { ShippingDestination } from 'src/shipping/entities/shipping.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from 'typeorm';
import { PageOptionDetail } from './pageOptionDetail.entity';
import { PostProcessOrder } from './postProcessOrder.entity';

@Entity()
export class Order extends CoreEntity {
  @Column()
  productName: string;

  @Column()
  orderName: string;

  @Column()
  orderNum: string;

  @Column({ nullable: true })
  price: number;
  //사용자 사이즈 입력
  @Column({ nullable: true })
  userSize: string;
  //요구사항
  @Column({ nullable: true })
  requirements: string;

  @Column({ nullable: true, default: false })
  isFileUpload: boolean;

  @Column({ nullable: true, default: false })
  isDelete: boolean;

  @Column({ nullable: true, default: false })
  isPurchase: boolean;

  //출고일
  @Column({ nullable: true })
  releaseDate: Date;

  //배송일
  @Column({ nullable: true })
  deliveryDate: Date;

  @Column({ nullable: true, default: false })
  isOffset: boolean;

  @ManyToOne(() => User, (user) => user.order, { onDelete: 'CASCADE' })
  user: User;

  @RelationId((order: Order) => order.user)
  userId: number;

  @ManyToOne(() => Docu_spec, (docuSpec) => docuSpec.order)
  docuSpec: Docu_spec;

  @ManyToOne(() => Binding, (binding) => binding.order)
  binding: Binding;

  @ManyToOne(() => Paper, (paper) => paper.order)
  paper: Paper;

  @OneToMany(() => FileUrl, (fileurl) => fileurl.order)
  file: FileUrl[];

  @OneToMany(
    () => PostProcessOrder,
    (postProcessOrder) => postProcessOrder.order,
  )
  postProcessOrder: PostProcessOrder[];

  @OneToMany(
    () => ShippingDestination,
    (shippingDestination) => shippingDestination.order,
  )
  shippingDestination: ShippingDestination[];

  @OneToMany(
    () => PageOptionDetail,
    (pageOptionDetail) => pageOptionDetail.order,
    {
      cascade: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ referencedColumnName: 'order_id' })
  pageOptionDetail!: PageOptionDetail[];
}
