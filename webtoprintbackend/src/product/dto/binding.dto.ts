import { IsOptional, IsString } from 'class-validator';

export class BindingDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsString()
  method: string;

  @IsString()
  direction: string;
}
