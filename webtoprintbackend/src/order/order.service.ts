import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Binding } from 'src/product/entities/binding.entity';
import { Docu_spec } from 'src/product/entities/docu_spec.entity';
import { PageOption } from 'src/product/entities/pageOption.entity';
import { Paper } from 'src/product/entities/paper.entity';
import { Process } from 'src/product/entities/process.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create.order.dto';
import { UpdateOrderDto } from './dto/update.order.dto';
import { Order } from './entities/order.entity';
import { PageOptionDetail } from './entities/pageOptionDetail.entity';
import { PostProcessOrder } from './entities/postProcessOrder.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Binding) private bindingRepository: Repository<Binding>,
    @InjectRepository(Docu_spec)
    private Docu_specRepository: Repository<Docu_spec>,
    @InjectRepository(Paper) private paperRepository: Repository<Paper>,
    @InjectRepository(PageOption)
    private pageOptionRepository: Repository<PageOption>,
    @InjectRepository(PageOptionDetail)
    private pageOptionDetailRepository: Repository<PageOptionDetail>,
    @InjectRepository(Process)
    private postProcessRepository: Repository<Process>,
    @InjectRepository(PostProcessOrder)
    private postProcessOrderRepository: Repository<PostProcessOrder>,
  ) {}

  getAllOrder() {
    try {
      const getOrder = this.orderRepository.find({
        relations: [
          'binding',
          'pageOptionDetail',
          'paper',
          'docuSpec',
          'pageOptionDetail.pageOption',
        ],
      });
      if (!getOrder) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '주문가져오기실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return getOrder;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getOneOrder(orderId) {
    try {
      const getOneOrder = this.orderRepository.findOne({ id: orderId });
      if (!getOneOrder) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '주문가져오기실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return getOneOrder;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getRecentOrder() {
    try {
      const resentOrder = await this.orderRepository
        .createQueryBuilder('order')
        .orderBy('make_createdAt', 'DESC')
        .getMany();
      return resentOrder;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateOrder(orderId, updateOrderDto: UpdateOrderDto) {
    try {
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  deleteOrder(orderId) {
    try {
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getUserRecentOrder() {
    try {
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getUserOrder(user: User) {
    try {
      // const userOrder = this.orderRepository
      //   .createQueryBuilder()
      //   .select('order')
      //   .from(Order, 'order')
      //   .where('order.userId = :id AND order.isDelete = :Delete', {
      //     id: user.id,
      //     Delete: false,
      //   })
      //   .leftJoinAndSelect('order.file', 'file')
      //   .leftJoinAndSelect('order.docuSpec', 'docuSpec')
      //   .leftJoinAndSelect('order.binding', 'binding')
      //   .leftJoinAndSelect('order.paper', 'paper')
      //   .orderBy('make_createdAt', 'DESC')
      //   .getMany();
      const userOrder = this.orderRepository.find({
        where: {
          user: user,
          isDelete: false,
        },
        order: {
          id: 'DESC',
        },
        relations: [
          'user',
          'file',
          'docuSpec',
          'binding',
          'paper',
          'pageOptionDetail',
          'pageOptionDetail.pageOption',
          'postProcessOrder',
        ],
      });
      console.log(userOrder);
      return userOrder;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getOneUserOrder(orderId, user: User) {
    try {
      // const userOneOrder = this.orderRepository
      //   .createQueryBuilder()
      //   .select('order')
      //   .where('order.userId = :id AND order.isDelete= :Delete', {
      //     id: user.id,
      //     Delete: false,
      //   });
      const userOneOrder = this.orderRepository.findOne({
        where: {
          id: orderId,
          user: user,
          isDelete: false,
        },
        relations: [
          'user',
          'file',
          'docuSpec',
          'binding',
          'paper',
          'pageOptionDetail',
          'pageOptionDetail.pageOption',
          'postProcessOrder',
        ],
      });
      if (!userOneOrder) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '유저주문가져오기실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return userOneOrder;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createUserOrder(createOrderDto: CreateOrderDto, user: User) {
    try {
      const createUserOrder = new Order();
      createUserOrder.orderName = createOrderDto.orderName;
      createUserOrder.productName = createOrderDto.productName;
      if (createOrderDto.binding) {
        const orderBinding = await this.bindingRepository.findOne({
          method: createOrderDto.binding.method,
          direction: createOrderDto.binding.direction,
        });
        createUserOrder.binding = orderBinding;
      }
      if (createOrderDto.docuSpec) {
        const orderDocuSpec = await this.Docu_specRepository.findOne({
          name: createOrderDto.docuSpec.name,
        });
        createUserOrder.docuSpec = orderDocuSpec;
      }
      createUserOrder.userSize = createOrderDto.userSize;

      if (createOrderDto.paper) {
        const orderPaper = await this.paperRepository.findOne({
          paperName: createOrderDto.paper.paperName,
          paperColor: createOrderDto.paper.paperColor,
          paperWeight: createOrderDto.paper.paperWeight,
          paperSize: createOrderDto.paper.paperSize,
        });
        createUserOrder.paper = orderPaper;
      }
      createUserOrder.orderNum = createOrderDto.orderNum;
      createUserOrder.price = createOrderDto.price;
      createUserOrder.requirements = createOrderDto.requirements;
      createUserOrder.user = user;
      const saveUserOrder = await this.orderRepository.save(createUserOrder);
      console.log(saveUserOrder);
      if (!saveUserOrder) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '유저주문생성실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      if (createOrderDto.pageOptionPaperOrder.length > 0) {
        for (let i = 0; i < createOrderDto.pageOptionPaperOrder.length; i++) {
          const pageOption = await this.pageOptionRepository.findOne({
            pageOption: createOrderDto.pageOptionPaperOrder[i].pageOption,
          });
          const pageOptionDetail = new PageOptionDetail();
          pageOptionDetail.order = saveUserOrder;
          pageOptionDetail.pageOption = pageOption;
          pageOptionDetail.pageOptionNum =
            createOrderDto.pageOptionPaperOrder[i].pageOptionNum;
          pageOptionDetail.pageOptionPaper =
            createOrderDto.pageOptionPaperOrder[i].pageOptionPaper;
          pageOptionDetail.printMethod =
            createOrderDto.pageOptionPaperOrder[i].printMethod;
          pageOptionDetail.seperation =
            createOrderDto.pageOptionPaperOrder[i].seperation;
          const savePageOptionDetail = this.pageOptionDetailRepository.save(
            pageOptionDetail,
          );
          console.log(savePageOptionDetail);
          if (!savePageOptionDetail) {
            throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: '페이지옵션 저장 실패',
              },
              HttpStatus.BAD_REQUEST,
            );
          }
        }
      }
      if (createOrderDto.postProcess.length > 0) {
        for (let i = 0; i < createOrderDto.postProcess.length; i++) {
          const postProcess = await this.postProcessRepository.findOne({
            id: +createOrderDto.postProcess[i].id,
          });
          const postProcessOrder = new PostProcessOrder();
          postProcessOrder.order = saveUserOrder;
          postProcessOrder.postProcess = postProcess;
          const savePostProcessOrder = this.postProcessOrderRepository.save(
            postProcessOrder,
          );
          if (!savePostProcessOrder) {
            throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: '후가공 저장 실패',
              },
              HttpStatus.BAD_REQUEST,
            );
          }
        }
      }
      return new HttpException(
        {
          status: HttpStatus.CREATED,
          message: '주문생성완료',
          order: saveUserOrder,
        },
        HttpStatus.CREATED,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  updateUserOrder(orderId, user: User, updateOrderDto: UpdateOrderDto) {
    try {
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  deleteUserOrder(orderId, user: User) {
    try {
      const deleteUserOrder = this.orderRepository
        .createQueryBuilder('order')
        .update(Order)
        .set({ isDelete: true })
        .where('order.id = :id AND order.userId = :user', {
          id: orderId,
          user: user.id,
        })
        .execute();
      if (!deleteUserOrder) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '주문 삭제 실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '주문삭제완료',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  purchaseUserOrder(orderId, user) {
    try {
      const purchaseUserOrder = this.orderRepository
        .createQueryBuilder('order')
        .update(Order)
        .set({ isPurchase: true })
        .where('order.id = :id AND order.userId = :user', {
          id: orderId,
          user: user.id,
        })
        .execute();
      if (!purchaseUserOrder) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '결제 실패',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      return new HttpException(
        {
          status: HttpStatus.OK,
          message: '결제완료',
        },
        HttpStatus.OK,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
