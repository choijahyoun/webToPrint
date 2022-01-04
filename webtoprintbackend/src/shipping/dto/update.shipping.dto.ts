import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateShippingDto
{
    @IsOptional()
    @IsString()
    pickupLoca : string; //수령장소

    @IsOptional()
    @IsString()
    recipient : string; // 수령인

    @IsOptional()
    @IsString()
    cellNumber : string; //수령인 핸드폰 번호

    @IsOptional()
    @IsString()
    phoneNumber : string; // 수령인 전화번호 

    @IsOptional()
    @IsString()
    zoneCode : string;

    @IsOptional()
    @IsString()
    shippingAddress : string; // 수령인 배송지 주소

    @IsOptional()
    @IsString()
    shippingAddressEtc : string; // 수령인 배송지 상세주소

    @IsOptional()
    @IsBoolean()
    basicShippingAddress : boolean; // 기본배송지 

}