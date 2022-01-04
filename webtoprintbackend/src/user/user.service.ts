import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMakeDto } from 'src/make/dto/create-make.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { User, UserRole } from './entities/user.entity';
import { Verification } from './entities/verification.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRespository: Repository<User>,
    private jwtService: JwtService,
    @InjectRepository(Verification)
    private verrificationRespository: Repository<Verification>,
  ) {}

  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({ description: '성공' })
  async createUser(userData: CreateUserDto) {
    try {
      const check = await this.userRespository.findOne({
        userEmail: userData.userEmail,
      });
      if (!check) {
        const user = new User();
        user.userName = userData.userName;
        user.userEmail = userData.userEmail;
        user.userPassword = userData.userPassword;
        user.userPhoneNumber = userData.userPhoneNumber;
        user.role = userData.role;
        if (userData.role === 'Business') {
          user.Company = userData.Company;
          user.BusinessPersonName = userData.BusinessPersonName;
        }
        return this.userRespository.save(user);
      }
      return 'user is already exist';
    } catch (e) {
      console.log(e);
      return;
    }
  }

  async updateUser(userid: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRespository.findOne(userid);
      if (!user) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '유저에러',
            errorDescription: '유저가 없습니다',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const updateUser = await this.userRespository.save([
        {
          id: userid,
          ...updateUserDto,
        },
      ]);
      return updateUser;
    } catch (error) {
      return error;
    }
  }

  getAll(): Promise<User[]> {
    return this.userRespository.find();
  }

  getById(id: number): Promise<User> {
    return this.userRespository.findOne(id);
  }

  async removeUser(id: number): Promise<void> {
    await this.userRespository.delete(id);
  }

  async getNameOne(userEmail: string): Promise<User | undefined> {
    return this.userRespository.findOne(userEmail);
  }

  async login(
    userData: LoginUserDto,
  ): Promise<{
    ok: boolean;
    error?: string;
    token?: string;
    Role: UserRole;
    ID: number;
  }> {
    try {
      const user = await this.userRespository.findOne({
        userEmail: userData.userEmail,
      });
      if (!user) {
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,
            error: 'UserNotExist',
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
      const passwordCorrect = await user.checkPassword(userData.userPassword);
      if (!passwordCorrect) {
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,
            error: 'WrongPassword',
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
      //ToDo private key를 넣어 주어야 한다. 보안을 위해서
      const token = this.jwtService.sign({ id: user.id });
      return {
        ok: true,
        token,
        Role: user.role,
        ID: user.id,
      };
    } catch (error) {
      throw error;
    }
  }
}
