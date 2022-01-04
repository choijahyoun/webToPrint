import { IsOptional, IsString } from 'class-validator';

export class LargeCategoryDto {
  @IsOptional()
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  code: string;
}
