import { Injectable } from '@nestjs/common';
import { MakeService } from 'src/make/make.service';
import { UpdateUserDto } from 'src/user/dto/update.user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AdminService {
  constructor(
    private userService: UserService,
    private makeService: MakeService,
  ) {}

  getUser() {
    try {
      const user = this.userService.getAll();

      console.log(user);
      return user;
    } catch (error) {
      return error;
    }
  }

  createUser() {
    try {
    } catch (error) {
      return error;
    }
  }

  updateUser(userId: number, userData: UpdateUserDto) {
    try {
      this.userService.updateUser(userId, userData);
    } catch (error) {
      return error;
    }
  }

  deleteUser(userId: number) {
    try {
      this.userService.removeUser(userId);
    } catch (error) {
      return error;
    }
  }

  getOrder() {
    try {
      return this.makeService.getOrderAdmin();
    } catch (error) {
      return error;
    }
  }
}
