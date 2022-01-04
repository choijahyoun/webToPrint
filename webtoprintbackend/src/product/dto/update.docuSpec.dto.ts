import { IsOptional, IsString } from 'class-validator';

export class UpdateDocuSpecDto {
  @IsOptional()
  @IsString()
  size: string;
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  series: string;
  @IsOptional()
  @IsString()
  cut: string;
  @IsOptional()
  @IsString()
  grain: string;
}
