import { Injectable, Put } from '@nestjs/common';
import { UserDto } from './user.dto/user.dto';

@Injectable()
export class UserService {
  users: any[];
  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Denis',
        email: 'shmakovbx@gmail.com',
        phone: '89263101733',
      },
      {
        id: 2,
        name: 'Di',
        email: 'dylirty@gmail.com',
        phone: '89263101732',
      },
      {
        id: 3,
        name: 'Vlad',
        email: 'papacha@gmail.com',
        phone: '89263101731',
      },
    ];
  }
  async getAll() {
    return this.users;
  }

  async create(dto: UserDto) {
    return [...this.users, dto];
  }

  async getById(id: string) {
    return this.users.find(user => user.id === Number(id));
  }

  async delete(id: string) {
    return this.users.filter(user => user.id !== Number(id));
  }

  @Put(':id')
  async update(id: string, dto: UserDto) {
    const user = await this.users.find(user => user.id === Number(id));
    return { ...user, ...dto };
  }
}
