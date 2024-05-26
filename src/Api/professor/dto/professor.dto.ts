import { ArrayNotEmpty, IsArray, IsEmail, IsNotEmpty } from 'class-validator';
import { Section } from '../../../Domains/section.enum';
import { Student } from '../../../Domains/student.schema';

export class ProfessorDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  sections: Section[];

  students: Student[];
}
