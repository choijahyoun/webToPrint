import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { UserRole } from "../entities/user.entity";

export class UpdateUserDto{
    
    @IsOptional()
    @IsString()
    @ApiProperty({type: String, description: '유저 이름'})
    userName : string;
    
    @IsOptional()
    @IsString()
    @ApiProperty({type: String, description: '유저 이메일'})
    userEmail :string;

    @IsOptional()
    @IsString()
    @ApiProperty({type: String, description: '유저 핸드폰번호'})
    userPhoneNumber : string;

    @IsOptional()
    @IsString()
    @ApiProperty({type: String, description: '유저 역활 {Personal, Business , Admin',nullable : true})
    role : UserRole
    @IsOptional()
    @IsString()
    @ApiProperty({type: String, description: '비지니스 회사 이름',nullable : true})
    Company : string;

    @IsOptional()
    @IsString()
    @ApiProperty({type: String, description: '비지니스 회사 사업자명 ',nullable : true})
    BusinessPersonName : string;
}