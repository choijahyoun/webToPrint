import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { BindingDto } from 'src/product/dto/binding.dto';
import { DocuSpecDto } from 'src/product/dto/docu_spec.dto';
import { PaperDto } from 'src/product/dto/paper.dto';
import { PostProcessDto } from 'src/product/dto/postProcess.dto';
import { PageOptionPaperOrderDto } from './paperOptionOrder.dto';

export class UpdateOrderDto {
  @IsString()
  productName: string;

  @IsString()
  orderName: string;

  @IsString()
  orderNum: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  userSize: string;

  @IsOptional()
  @IsString()
  requirements: string;

  @IsOptional()
  @IsBoolean()
  isDelete: boolean;

  @IsOptional()
  @IsBoolean()
  isPuchase: boolean;

  @IsOptional()
  @IsBoolean()
  isOffset: boolean;

  //출고일
  @IsOptional()
  @IsDate()
  releaseDate: Date;

  //배송일
  @IsOptional()
  @IsDate()
  deliveryDate: Date;

  @IsOptional()
  docuSpec: DocuSpecDto;

  @IsOptional()
  binding: BindingDto;

  @IsOptional()
  paper: PaperDto;

  @IsOptional()
  postProcess: PostProcessDto[];

  @IsOptional()
  pageOptionPaperOrder: PageOptionPaperOrderDto[];
}
