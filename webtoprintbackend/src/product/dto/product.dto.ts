import { IsOptional, IsString } from 'class-validator';
import { BindingDto } from './binding.dto';
import { DocuSpecDto } from './docu_spec.dto';
import { PageOptionDto } from './pageOption.dto';
import { PaperDto } from './paper.dto';
import { PostProcessDto } from './postProcess.dto';

export class ProductDto {
  @IsOptional()
  @IsString()
  id: string;
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  midiumCategory: string;

  @IsOptional()
  @IsString()
  offset: string;

  @IsOptional()
  @IsString()
  quantity: string;

  @IsOptional()
  docuSpec: DocuSpecDto[];

  @IsOptional()
  postProcess: PostProcessDto[];

  @IsOptional()
  binding: BindingDto[];

  @IsOptional()
  paper: PaperDto[];

  @IsOptional()
  pageOption: PageOptionDto[];

  @IsOptional()
  @IsString()
  imgLocation: string;
}
