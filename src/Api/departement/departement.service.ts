import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartementDto } from "./dto/create-department.dto";
import { UpdateDepartementDto } from "./dto/update-department.dto";
import { Departement, DepartementDocument } from "../../Domains/departement.schema";

@Injectable()
export class DepartementService {
  constructor(@InjectModel(Departement.name)
              private readonly departementModel: Model<DepartementDocument>) {}

  async create(createDepartmentDto: CreateDepartementDto): Promise<Departement> {
    const newDepartment = new this.departementModel(createDepartmentDto);
    return newDepartment.save();
  }

  async findAll(): Promise<Departement[]> {
    return this.departementModel.find().populate('director').exec();
  }

  async findOne(id: string): Promise<Departement> {
    const departement = await this.departementModel.findById(id).populate('director').exec();
    if (!departement) {
      throw new NotFoundException(`Departement with ID ${id} not found`);
    }
    return departement;
  }

  async update(id: string, updateDepartementDto: UpdateDepartementDto): Promise<Departement> {
    const existingDepartement = await this.departementModel.findByIdAndUpdate(id, updateDepartementDto, { new: true }).populate('director').exec();
    if (!existingDepartement) {
      throw new NotFoundException(`Departement with ID ${id} not found`);
    }
    return existingDepartement;
  }

  async remove(id: string): Promise<void> {
    const result = await this.departementModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Departement with ID ${id} not found`);
    }
  }
}
