import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCartDto {

    @IsString()
    titleName : string;
    
   @IsString()
    productName :string;

    //상품 사이즈 
   @IsString()
    size : string;

    //재단사이즈
   @IsString()
    cutting_size: string;

    //제본종류
   @IsString()
    kindBinding : string;

    //링
   @IsOptional()
   @IsString()
    ring : string;

    //앞뒤면비닐
   @IsOptional()
   @IsString()
    vinyl : string;

    //제본방향
   @IsString()
    bindDirection : string;

    //표지  양단면
   @IsString()
    coverPrex : string;

    //표지 색깔
   @IsString()
    coverColor : string;

    // 표지 용지 
   @IsString()
    coverPaper : string;

    //후가공
    @IsBoolean()
    postProcessEfoxy : boolean;
   @IsOptional()
   @IsString()
    postProcessKindCoating : string;
   @IsOptional()
   @IsString()
    postProcessKindLeaf : string;

    //본문 양단면
   @IsString()
    mainPrex : string;
    //본문 색깔
   @IsString()
    mainColor : string;
    //본문 용지 
   @IsString()
    mainPaper : string;
    
   @IsNumber()
    mainPaperNum : number;

   @IsOptional()
   @IsString()
    flyLeaf : string;

    // 제작부수 
    @IsNumber()
    makeNum : number;

    //급한 인쇄 
   @IsOptional()
    @IsBoolean()
    quickPrint : boolean;

    @IsOptional()
    @IsBoolean()
    isFileUpload : boolean;

    
}