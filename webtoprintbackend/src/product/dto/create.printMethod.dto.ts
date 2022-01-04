import { IsOptional, IsString } from 'class-validator';

export class CreatePrintMethodDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  plusColor: string;
}
