import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Make } from 'src/make/entities/make.entity';
import { MakeService } from 'src/make/make.service';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(private makeService: MakeService) {}

  async payOrder(orderId: number, authUser: User) {
    return this.makeService.payOrder(orderId, authUser);
  }
}
