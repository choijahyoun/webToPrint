import { IsBoolean, IsNumber, IsOptional, IsString, isString } from "class-validator";


export class CreateShippingDto 
{
    @IsString()
    pickupLoca : string; //수령장소

    @IsString()
    recipient : string; // 수령인

    @IsString()
    cellNumber : string; //수령인 핸드폰 번호

    @IsOptional()
    @IsString()
    phoneNumber : string; // 수령인 전화번호  

    @IsString()
    zoneCode : string;
    
    @IsString()
    shippingAddress : string; // 수령인 배송지 주소

    @IsString()
    shippingAddressEtc : string; // 수령인 배송지 상세주소

    @IsOptional()
    @IsBoolean()
    basicShippingAddress : boolean; // 기본배송지 
}