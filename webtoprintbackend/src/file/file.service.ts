import {
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Make } from 'src/make/entities/make.entity';
import { MakeService } from 'src/make/make.service';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateFileDto } from './dto/update.file.dto';
import { FileUrl } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileUrl) private fileUrlRepository: Repository<FileUrl>,
    @InjectRepository(Make) private makeRepository: Repository<Make>,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}

  fileGet(orderId: number) {
    try {
      const fileName = this.fileUrlRepository.find({ makeId: orderId });
      if (!fileName) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '파일이 존재하지 않습니다.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      console.log(fileName);
      return fileName;
    } catch (error) {
      return error;
    }
  }

  async fileUpload(orderFiles: Express.Multer.File[], orderId: number) {
    try {
      this.makeRepository
        .createQueryBuilder('make')
        .update(Make)
        .set({ isFileUpload: true })
        .where('make.id = :id', { id: orderId })
        .execute();
      const make = await this.makeRepository.findOne({ id: orderId });
      if (!make) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '주문이 존재하지 않습니다.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (orderFiles.length > 0) {
        for (let i = 0; i < orderFiles.length; i++) {
          const fileurl = new FileUrl();
          fileurl.fileName = `${orderFiles[i].originalname}`;
          fileurl.fileLocation = `${process.env.LOCALPATH}/${orderFiles[i].destination}/${orderFiles[i].filename}`;
          fileurl.make = make;
          await this.fileUrlRepository.save(fileurl);
        }
      }
      return new HttpException(
        {
          status: HttpStatus.CREATED,
          message: '파일 등록 완료',
        },
        HttpStatus.CREATED,
      );
    } catch (error) {
      throw error;
    }
  }

  async fileOrderUpload(orderFiles: Express.Multer.File[], orderId: number) {
    try {
      this.orderRepository
        .createQueryBuilder('order')
        .update(Order)
        .set({ isFileUpload: true })
        .where('make.id = :id', { id: orderId })
        .execute();
      const order = await this.orderRepository.findOne({ id: orderId });
      if (!order) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '주문이 존재하지 않습니다.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (orderFiles.length > 0) {
        for (let i = 0; i < orderFiles.length; i++) {
          const fileurl = new FileUrl();
          fileurl.fileName = `${orderFiles[i].originalname}`;
          fileurl.fileLocation = `${process.env.LOCALPATH}/${orderFiles[i].destination}/${orderFiles[i].filename}`;
          fileurl.order = order;
          await this.fileUrlRepository.save(fileurl);
        }
      }
      return new HttpException(
        {
          status: HttpStatus.CREATED,
          message: '파일 등록 완료',
        },
        HttpStatus.CREATED,
      );
    } catch (error) {
      throw error;
    }
  }

  fileDelete(fileId: number) {
    try {
      this.fileUrlRepository.delete({ id: fileId });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  fileUpdate(files: Express.Multer.File, fileId: number) {
    try {
      const file = this.fileUrlRepository.findOne({ id: fileId });
      if (!file) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '파일에러',
            errorDesciption: '파일이 없습니다',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const updateFile = this.fileUrlRepository.save({
        id: fileId,
        fileLocation: `${process.env.LOCALPATH}/${files[0].destination}/${files[0].filename}`,
        fileName: `${files[0].originalname}`,
      });
      return updateFile;
    } catch (error) {
      console.log(error);
    }
  }
}
