import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Professor, ProfessorDocument } from '../../Domains/professor.schema';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectModel(Professor.name)
    private readonly professorModel: Model<ProfessorDocument>,
  ) {}

  async create(professor: Professor): Promise<Professor> {
    const createdProfessor = new this.professorModel(professor);
    return await createdProfessor.save();
  }

  async findAll(): Promise<Professor[]> {
    return await this.professorModel.find().exec();
  }

  async findOne(id: ObjectId): Promise<Professor> {
    return await this.professorModel.findById(id).exec();
  }

  async update(id: ObjectId, professor: Professor): Promise<Professor> {
    await this.professorModel.findByIdAndUpdate(id, professor).exec();
    return await this.findOne(id);
  }

  async remove(id: ObjectId): Promise<void> {
    await this.professorModel.findByIdAndDelete(id).exec();
  }
}
