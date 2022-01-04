import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMakeDto {
  //주문명
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '주문명' })
  titleName?: string;

  //상품명
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '상품명' })
  productName?: string;

  //상품 사이즈
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '상품 사이즈' })
  size?: string;

  //재단사이즈
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '재단사이즈' })
  cutting_size?: string;

  //제본종류
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '제본종류' })
  kindBinding?: string;

  //링
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '제본 링' })
  ring?: string;

  //앞뒤면비닐
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '제본 앞뒤면비닐' })
  vinyl?: string;

  //제본방향
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '제본방향' })
  bindDirection?: string;

  //표지  양단면
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '표지양단면' })
  coverPrex?: string;

  //표지 색깔
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '표지 색깔' })
  coverColor?: string;

  // 표지 용지
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '표지 용지' })
  coverPaper?: string;

  //후가공 에폭시
  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    description: '후가공중 에폭시 유무',
    nullable: true,
  })
  postProcessEfoxy?: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '후가공 코팅', nullable: true })
  postProcessKindCoating?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '후가공 박', nullable: true })
  postProcessKindLeaf?: string;

  //본문 양단면
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '본문 양단면' })
  mainPrex?: string;

  //본문 색깔
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '본문 색깔' })
  mainColor?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '본문 용지' })
  mainPaper?: string;
  //본문 페이지
  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, description: '본문 용지 매수' })
  mainPaperNum?: number;
  //면지
  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '면지', nullable: true })
  flyLeaf?: string;

  // 제작부수
  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, description: '제작부수' })
  makeNum?: number;

  //급한 인쇄
  @IsOptional()
  @IsBoolean()
  @ApiProperty({ type: String, description: '급한인쇄 유무', nullable: true })
  quickPrint?: boolean;
}
