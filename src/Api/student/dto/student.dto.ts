import { Section } from '../../../Domains/section.enum';

export class StudentDto {
  readonly email: string;
  readonly name: string;
  readonly firstName: string;
  readonly cin: string;
  readonly phone: string;
  readonly dateOfBirth: Date;
  readonly inscriptionNumber: string;
  readonly section: Section;
}
