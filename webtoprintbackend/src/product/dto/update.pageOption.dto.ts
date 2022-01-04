import { IsOptional, IsString } from 'class-validator';

export class UpdatePageOptionDto {
  @IsOptional()
  @IsString()
  id: string;
  @IsOptional()
  @IsString()
  pageOption: string;
}
