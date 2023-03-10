import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
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
  @Get()
  async getAll() {
    return this.users;
  }
}
