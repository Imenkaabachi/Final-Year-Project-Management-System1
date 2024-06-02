import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { CreateDepartementDto } from './dto/create-department.dto';
import { UpdateDepartementDto } from './dto/update-department.dto';
import { Departement } from "../../Domains/departement.schema";
import { DepartementService } from "./departement.service";

@Controller('departements')
export class DepartementController {
  constructor(private readonly departementService: DepartementService) {}

  @Post()
  async create(@Body() createDepartementDto: CreateDepartementDto): Promise<Departement> {
    return this.departementService.create(createDepartementDto);
  }

  @Get()
  async findAll(): Promise<Departement[]> {
    return this.departementService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Departement> {
    const departement = await this.departementService.findOne(id);
    if (!departement) {
      throw new NotFoundException(`Departement with ID ${id} not found`);
    }
    return departement;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartementDto): Promise<Departement> {
    return this.departementService.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.departementService.remove(id);
  }
}
