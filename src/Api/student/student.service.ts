import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from '../../Domains/student.entity';
import { ObjectId, Repository } from 'typeorm';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async create(studentDto: StudentDto): Promise<StudentEntity> {
    const student = this.studentRepository.create(studentDto);
    return await this.studentRepository.save(student);
  }

  async findAll(): Promise<StudentEntity[]> {
    return await this.studentRepository.find();
  }

  async findOne(id: ObjectId): Promise<StudentEntity> {
    return await this.studentRepository.findOneBy({ id });
  }

  async update(
    id: ObjectId,
    studentData: Partial<StudentEntity>,
  ): Promise<StudentEntity> {
    await this.studentRepository.update(id, studentData);
    return await this.studentRepository.findOneBy({ id });
  }

  async remove(id: ObjectId): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
