import { Entity, Column, BeforeInsert, OneToMany } from 'typeorm';
import * as bycypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { Make } from 'src/make/entities/make.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { ShippingDestination } from 'src/shipping/entities/shipping.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { Order } from 'src/order/entities/order.entity';

export enum UserRole {
  Personal = 'Personal',
  Business = 'Business',
  Admin = 'Admin',
}

@Entity()
export class User extends CoreEntity {
  @Column()
  userName: string;

  @Column()
  userEmail: string;

  @Column()
  userPassword: string;

  @Column()
  userPhoneNumber: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.Personal,
  })
  role: UserRole;

  @Column({
    nullable: true,
  })
  Company: string;

  @Column({
    nullable: true,
  })
  BusinessPersonName: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      this.userPassword = await bycypt.hash(this.userPassword, 10);
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async checkPassword(aPassword: string): Promise<boolean> {
    try {
      const ok = await bycypt.compare(aPassword, this.userPassword);
      return ok;
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }

  @OneToMany(() => Make, (make) => make.user)
  make: Make[];

  @OneToMany(() => Order, (order) => order.user)
  order: Order[];

  @OneToMany(
    () => ShippingDestination,
    (shippingDestination) => shippingDestination.user,
  )
  shippingDestination: ShippingDestination[];

  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart[];
}
