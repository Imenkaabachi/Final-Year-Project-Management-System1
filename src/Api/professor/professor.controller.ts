import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Professor } from '../../Domains/professor.schema';
import { ProfessorService } from './professor.service';
import { Types } from 'mongoose';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorsService: ProfessorService) {}

  @Post()
  async create(@Body() professor: Professor): Promise<Professor> {
    return await this.professorsService.create(professor);
  }

  @Get()
  async findAll(): Promise<Professor[]> {
    return await this.professorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Professor> {
    return await this.professorsService.findOne(new Types.ObjectId(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() professor: Professor,
  ): Promise<Professor> {
    return await this.professorsService.update( new Types.ObjectId(id), professor);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.professorsService.remove(new Types.ObjectId(id));
  }
}
