import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Professor } from '../../Domains/professor.entity';
import { ProfessorService } from './professor.service';
import { ObjectId } from 'typeorm';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorsService: ProfessorService) {}

  @Post()
  async create(@Body() professor: Professor): Promise<Professor> {
    return this.professorsService.create(professor);
  }

  @Get()
  async findAll(): Promise<Professor[]> {
    return this.professorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<Professor> {
    return this.professorsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: ObjectId,
    @Body() professor: Professor,
  ): Promise<Professor> {
    return this.professorsService.update(id, professor);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId): Promise<void> {
    return this.professorsService.remove(id);
  }
}
