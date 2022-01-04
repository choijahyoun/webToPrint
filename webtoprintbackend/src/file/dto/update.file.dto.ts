import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { UserRole } from 'src/user/entities/user.entity';
import { Column } from 'typeorm';

export class UpdateFileDto {
  @IsOptional()
  @IsString()
  fileName: string;

  @IsOptional()
  @IsString()
  fileLocation: string;

  @IsOptional()
  @IsBoolean()
  isDelete: boolean;
}
