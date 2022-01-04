import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePaperDto {
  @IsOptional()
  @IsString()
  paperName: string;

  @IsOptional()
  @IsString()
  paperColor: string;

  @IsOptional()
  @IsString()
  paperWeight: string;

  @IsOptional()
  @IsString()
  paperSize: string;

  @IsOptional()
  @IsString()
  manufacturer: string;
  //매수
  @IsOptional()
  @IsString()
  page_count: string;
  //선방입고
  @IsOptional()
  @IsString()
  prior_arrial: boolean;
  //입고처
  @IsOptional()
  @IsString()
  receiving_location: string;
  //종이유형
  @IsOptional()
  @IsString()
  series: string;
  //종이결
  @IsOptional()
  @IsString()
  grain: string;
  //고시가
  @IsOptional()
  @IsNumber()
  market_price: number;
  //할인율
  @IsOptional()
  @IsNumber()
  discount_rate: number;
  //매입단가
  @IsOptional()
  @IsNumber()
  purchase_unit_price: number;
  //마진율
  @IsOptional()
  @IsNumber()
  margin_rate: number;
  //매출단가
  @IsOptional()
  @IsNumber()
  sales_unit_price: number;
  //창고
  @IsOptional()
  @IsString()
  warehouse: string;
  //현재재고량
  @IsOptional()
  @IsString()
  current_stock: string;
  //재고시작일자
  @IsOptional()
  @IsString()
  start_stock_date: string;
  //시작재고량
  @IsOptional()
  @IsString()
  start_stock: string;
  //시작재고금액
  @IsOptional()
  @IsString()
  start_stock_price: string;
  //안전재고량
  @IsOptional()
  @IsString()
  safety_stock: string;
}
