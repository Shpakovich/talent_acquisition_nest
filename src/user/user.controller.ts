import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './user.dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  async getAll() {
    return this.UserService.getAll();
  }

  @Post()
  async create(@Body() dto: UserDto) {
    return this.UserService.create(dto);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.UserService.getById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.UserService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UserDto) {
    return await this.UserService.update(id, dto);
  }
}
