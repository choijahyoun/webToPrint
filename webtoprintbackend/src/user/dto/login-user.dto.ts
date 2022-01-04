import { ApiProperty } from '@nestjs/swagger';
import {IsString} from 'class-validator'

export class LoginUserDto{
    @IsString()
    @ApiProperty({type: String, description: ' 로그인 유저 이메일'})
    userEmail :string;

    @IsString()
    @ApiProperty({type: String, description: '로그인 유저 비밀번호'})
    userPassword : string;
    
}