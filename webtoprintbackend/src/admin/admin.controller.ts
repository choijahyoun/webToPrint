import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Role } from 'src/role/role.decorator';
import { UpdateUserDto } from 'src/user/dto/update.user.dto';
import { UserRole } from 'src/user/entities/user.entity';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Role([UserRole.Admin])
  @Get('/user')
  getUser() {
    return this.adminService.getUser();
  }

  @Role([UserRole.Admin])
  @Post('/user/update/:id')
  updateUser(@Param('id') userId: number, @Body() userDto: UpdateUserDto) {
    return this.adminService.updateUser(userId, userDto);
  }

  @Role([UserRole.Admin])
  @Delete('/user/delete/:id')
  deleteUser(@Param('id') userId: number) {
    return this.adminService.deleteUser(userId);
  }

  @Role([UserRole.Admin])
  @Get('/order')
  getOrder() {
    return this.adminService.getOrder();
  }
}
