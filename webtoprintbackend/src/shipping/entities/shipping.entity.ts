import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';

@Entity()
export class ShippingDestination extends CoreEntity {
  @Column()
  pickupLoca: string; //수령장소

  @Column()
  recipient: string; // 수령인

  @Column()
  cellNumber: string; //수령인 핸드폰 번호

  @Column({
    nullable: true,
  })
  phoneNumber: string; // 수령인 전화번호

  //배송지 주소 우편번호
  @Column()
  zoneCode: string;

  @Column()
  shippingAddress: string; // 수령인 배송지 주소

  @Column()
  shippingAddressEtc: string; // 수령인 배송지 상세 주소

  @Column({
    nullable: true,
  })
  basicShippingAddress: boolean; // 기본배송지

  @ManyToOne(() => Order, (order) => order.shippingDestination)
  order: Order;

  @ManyToOne(() => User, (user) => user.shippingDestination, {
    onDelete: 'CASCADE',
  })
  user: User;

  @RelationId((shipping: ShippingDestination) => shipping.user)
  userId: number;
}
