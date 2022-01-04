import { IsOptional, IsString } from 'class-validator';

export class UpdateBindingDto {
  @IsOptional()
  @IsString()
  method?: string;
  @IsOptional()
  @IsString()
  direction?: string;
}
