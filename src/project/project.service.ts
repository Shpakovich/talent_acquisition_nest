import { Injectable, Put } from '@nestjs/common';
import { ProjectDto } from './project.dto/project.dto';

@Injectable()
export class ProjectService {
  projects: any[];
  constructor() {
    this.projects = [
      {
        id: 1,
        name: 'Sberseasons',
        description: '',
        tags: ['Social media strategy', 'Social media branding'],
        logo: 'https://free-png.ru/wp-content/uploads/2020/09/icon_sber-01-340x340.png',
        dateStart: Date.now(),
        dateEnd: Date.now() + 10000000,
        participants: [1, 2, 3],
      },
      {
        id: 2,
        name: 'Alfa',
        description: 'Students',
        tags: [],
        logo: '',
        dateStart: Date.now(),
        dateEnd: Date.now() + 100000,
        participants: [2, 3],
      },
      {
        id: 3,
        name: 'Test Project',
        description: 'Test description',
        tags: ['Social media strategy'],
        logo: '',
        dateStart: Date.now(),
        dateEnd: Date.now() + 100000,
        participants: [1],
      },
    ];
  }

  async getAll() {
    return this.projects;
  }

  async create(dto: ProjectDto) {
    return [...this.projects, dto];
  }

  async getById(id: string) {
    return this.projects.find(project => project.id === Number(id));
  }

  async delete(id: string) {
    return this.projects.filter(project => project.id !== Number(id));
  }

  @Put(':id')
  async update(id: string, dto: ProjectDto) {
    const project = await this.projects.find(
      project => project.id === Number(id),
    );
    return { ...project, ...dto };
  }
}
