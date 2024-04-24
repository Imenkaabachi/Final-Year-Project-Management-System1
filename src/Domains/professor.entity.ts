import { Column, Entity, ObjectIdColumn, OneToMany } from 'typeorm';
import { Section } from './section.enum';
import { StudentEntity } from './student.entity';
import { ObjectId } from 'mongodb';

@Entity()
export class Professor {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  sections: Section[];

  @OneToMany(() => StudentEntity, (student) => student.supervisor)
  students: StudentEntity[];
}
