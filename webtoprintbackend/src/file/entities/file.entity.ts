import { CoreEntity } from 'src/common/entities/core.entity';
import { Make } from 'src/make/entities/make.entity';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';

@Entity()
export class FileUrl extends CoreEntity {
  @Column()
  fileName: string;

  @Column()
  fileLocation: string;

  @ManyToOne(() => Make, (make) => make.file, { onDelete: 'CASCADE' })
  make: Make;

  @ManyToOne(() => Order, (order) => order.file, { onDelete: 'CASCADE' })
  order: Order;

  @RelationId((file: FileUrl) => file.make)
  makeId: number;
}
