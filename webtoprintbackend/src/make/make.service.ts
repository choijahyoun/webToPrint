import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUrl } from 'src/file/entities/file.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateMakeDto } from './dto/create-make.dto';
import { UpdateMakeDto } from './dto/update-make.dto';
import { Make } from './entities/make.entity';

@Injectable()
export class MakeService {
  constructor(
    @InjectRepository(Make) private makeRepository: Repository<Make>,
  ) {}

  //TODO : pagination,
  //TODO : 검색 쿼리
  getOrderAdmin(): Promise<Make[]> {
    return this.makeRepository.find({
      relations: ['user'],
    });
  }

  getOrder(authUser: User) {
    return this.makeRepository
      .createQueryBuilder()
      .select('make')
      .from(Make, 'make')
      .where('make.userId = :id AND make.isDelete = :Delete', {
        id: authUser.id,
        Delete: false,
      })
      .leftJoinAndSelect('make.file', 'file')
      .orderBy('make_createdAt', 'DESC')
      .getMany();
  }

  async createMake(makeData: CreateMakeDto, authUser: User) {
    try {
      const make = new Make();
      make.titleName = makeData.titleName;
      make.productName = makeData.productName;
      make.size = makeData.size;
      make.cutting_size = makeData.cutting_size;
      make.kindBinding = makeData.kindBinding;
      make.ring = makeData.ring;
      make.vinyl = makeData.vinyl;
      make.bindDirection = makeData.bindDirection;
      make.coverPrex = makeData.coverPrex;
      make.coverColor = makeData.coverColor;
      make.coverPaper = makeData.coverPaper;
      make.postProcessEfoxy = makeData.postProcessEfoxy;
      make.postProcessKindCoating = makeData.postProcessKindCoating;
      make.postProcessKindLeaf = makeData.postProcessKindLeaf;
      make.mainPrex = makeData.mainPrex;
      make.mainPaper = makeData.mainPaper;
      make.mainColor = makeData.mainColor;
      make.mainPaperNum = makeData.mainPaperNum;
      make.flyLeaf = makeData.flyLeaf;
      make.makeNum = makeData.makeNum;
      make.quickPrint = makeData.quickPrint;
      make.user = authUser;
      return this.makeRepository.save(make);
    } catch (error) {
      return error;
    }
  }

  getOne(orderId: number) {
    return this.makeRepository.findOne(orderId);
  }

  async getRecentOrder(authuser: User) {
    try {
      const resentOrder = await this.makeRepository
        .createQueryBuilder('make')
        .where('make.userId = :user', { user: authuser.id })
        .orderBy('make_createdAt', 'DESC')
        .getOne();
      return resentOrder;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  userFileUplaodOrder(orderId: number) {
    try {
      return this.makeRepository
        .createQueryBuilder('make')
        .update(Make)
        .set({ isFileUpload: true })
        .where('make.id = :id', { id: orderId })
        .execute();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async payOrder(orderId: number, authUser: User) {
    try {
      const order = await this.makeRepository.findOne(orderId);
      console.log(order);
      if (!order) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Order not found',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (authUser.id !== order.userId) {
        console.log(orderId, order.userId);
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: " you can't edit a order that you don't owner",
          },
          HttpStatus.FORBIDDEN,
        );
      }
      const payment = this.makeRepository
        .createQueryBuilder('make')
        .update(Make)
        .set({ isPayment: true })
        .where('make.id = :id', { id: orderId })
        .execute();
      console.log(payment);
      return payment;
    } catch (error) {
      return error;
    }
  }

  userDeleteOrder(orderId: number) {
    try {
      return this.makeRepository
        .createQueryBuilder('make')
        .update(Make)
        .set({ isDelete: true })
        .where('make.id = :id', { id: orderId })
        .execute();
    } catch (error) {
      return error;
    }
  }

  async updateOrder(
    orderId: number,
    updateData: UpdateMakeDto,
    authuser: User,
  ) {
    try {
      const userOrder = await this.makeRepository.findOne(orderId, {
        loadRelationIds: true,
      });
      if (!userOrder) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Order not found',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (authuser.id !== userOrder.userId) {
        console.log(orderId, userOrder.userId);
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: " you can't edit a order that you don't owner",
          },
          HttpStatus.FORBIDDEN,
        );
      }
      const updateorder = await this.makeRepository.save([
        {
          id: orderId,
          ...updateData,
        },
      ]);
      console.log(updateorder);
      return updateorder;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  deleteOrder(orderId: number) {
    return 'delete Order';
  }
}
