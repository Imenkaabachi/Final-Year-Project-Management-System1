import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Professor } from './professor.entity';
import { Section } from './section.enum';

@Entity()
export class StudentEntity {
  // @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  firstName: string;

  @Column({ length: 8 })
  cin: string;

  @Column({ length: 8 })
  phone: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column({ length: 7 })
  inscriptionNumber: string;

  @Column({ type: 'enum', enum: Section }) // Add section column
  section: Section; // Each student belongs to one section

  @ManyToOne(() => Professor, (professor) => professor.students)
  supervisor: Professor;
}
