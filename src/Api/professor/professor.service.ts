import { Injectable } from '@nestjs/common';
import { Professor } from '../../Domains/professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  async findOne(id: string): Promise<Professor> {
    return this.professorRepository.findOneBy({ id });
  }

  async update(id: string, professor: Professor): Promise<Professor> {
    await this.professorRepository.update(id, professor);
    return this.professorRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.professorRepository.delete(id);
  }
}
