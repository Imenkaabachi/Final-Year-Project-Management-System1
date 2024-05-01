import { Injectable } from '@nestjs/common';
import { Professor } from '../../Domains/professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>,
  ) {}

  async create(professor: Professor): Promise<Professor> {
    return this.professorRepository.save(professor);
  }

  async findAll(): Promise<Professor[]> {
    return this.professorRepository.find();
  }

  async findOne(id: ObjectId): Promise<Professor> {
    return this.professorRepository.findOneBy({ id });
  }

  async update(id: ObjectId, professor: Professor): Promise<Professor> {
    await this.professorRepository.update(id, professor);
    return this.professorRepository.findOneBy({ id });
  }

  async remove(id: ObjectId): Promise<void> {
    await this.professorRepository.delete(id);
  }
}
