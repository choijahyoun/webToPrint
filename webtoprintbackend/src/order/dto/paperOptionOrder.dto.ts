import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PageOptionPaperOrderDto {
  @IsOptional()
  @IsNumber()
  pageOpitonId: number;
  @IsOptional()
  @IsString()
  pageOption: string;
  //페이지옵션용지
  @IsOptional()
  @IsString()
  pageOptionPaper: string;

  //페이지옵션 페이지수
  @IsOptional()
  @IsString()
  pageOptionNum: string;

  //인쇄도수
  @IsOptional()
  @IsString()
  seperation: string;

  //인쇄방식
  @IsOptional()
  @IsString()
  printMethod: string;
}
