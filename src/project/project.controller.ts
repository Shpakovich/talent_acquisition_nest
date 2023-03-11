import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from './project.dto/project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly ProjectService: ProjectService) {}
  @Get()
  async getAll() {
    return this.ProjectService.getAll();
  }

  @Post()
  async create(@Body() dto: ProjectDto) {
    return this.ProjectService.create(dto);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.ProjectService.getById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.ProjectService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: ProjectDto) {
    return await this.ProjectService.update(id, dto);
  }
}
