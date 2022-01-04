import { IsOptional, IsString } from 'class-validator';

export class PageOptionDto {
  @IsOptional()
  @IsString()
  id: string;
  @IsString()
  pageOption: string;
}
