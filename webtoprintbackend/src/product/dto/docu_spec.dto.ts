import { IsOptional, IsString } from 'class-validator';

export class DocuSpecDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsString()
  size: string;

  @IsString()
  name: string;

  @IsString()
  series: string;

  @IsString()
  cut: string;

  @IsString()
  grain: string;
}
