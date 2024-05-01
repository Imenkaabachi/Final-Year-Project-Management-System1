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
import { StudentEntity } from '../../Domains/student.entity';
import { StudentService } from './student.service';
import { ObjectId } from 'typeorm';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() studentDto: StudentDto): Promise<StudentEntity> {
    return await this.studentService.create(studentDto);
  }

  @Get()
  async findAll(): Promise<StudentEntity[]> {
    return await this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<StudentEntity> {
    return await this.studentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: ObjectId,
    @Body() studentData: Partial<StudentEntity>,
  ): Promise<StudentEntity> {
    return await this.studentService.update(id, studentData);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId): Promise<void> {
    await this.studentService.remove(id);
  }
}
