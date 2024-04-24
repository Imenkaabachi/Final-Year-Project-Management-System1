import { StudentEntity } from 'src/Domains/student.entity';
import { Entity, JoinColumn, ObjectIdColumn, OneToOne } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('LettreAffectation')
export class LettreAffectation {
  @ObjectIdColumn()
  id: ObjectId;

  @OneToOne(() => StudentEntity)
  @JoinColumn()
  student: StudentEntity;
}
