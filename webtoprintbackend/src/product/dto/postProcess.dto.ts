import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class PostProcessDto {
  @IsOptional()
  @IsString()
  id: string;
  @IsString()
  kind: string;
  @IsString()
  name: string;
  //기준부수
  @IsOptional()
  @IsString()
  standard_circulation: string;
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

  @IsOptional()
  @IsBoolean()
  isCheck: boolean;
}
