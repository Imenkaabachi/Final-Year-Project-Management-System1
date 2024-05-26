import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { Student } from '../../Domains/student.schema';
import { StudentService } from './student.service';
import { ObjectId } from 'typeorm';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() studentDto: StudentDto): Promise<Student> {
    return await this.studentService.create(studentDto);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return await this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<Student> {
    return await this.studentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: ObjectId,
    @Body() studentData: Partial<Student>,
  ): Promise<Student> {
    return await this.studentService.update(id, studentData);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId): Promise<void> {
    await this.studentService.remove(id);
  }
}
