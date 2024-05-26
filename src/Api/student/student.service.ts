import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from '../../Domains/student.schema';
import { ObjectId } from 'mongodb';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>,
  ) {}

  async create(studentDto: StudentDto): Promise<Student> {
    const createdStudent = new this.studentModel(studentDto);
    return await createdStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }

  async findOne(id: ObjectId): Promise<Student> {
    return await this.studentModel.findById(id).exec();
  }

  async update(
    id: ObjectId,
    studentData: Partial<Student>,
  ): Promise<Student> {
    await this.studentModel.findByIdAndUpdate(id, studentData).exec();
    return await this.findOne(id);
  }

  async remove(id: ObjectId): Promise<void> {
    await this.studentModel.findByIdAndDelete(id).exec();
  }
}
