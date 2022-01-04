import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class MidiumCategoryDto {
  @IsOptional()
  @IsString()
  id: string;
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean;

  @IsString()
  largeCategory: string;
}
