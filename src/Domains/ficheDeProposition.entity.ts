import { StudentEntity } from 'src/Domains/student.entity';
import { Entity, JoinColumn, ObjectIdColumn, OneToOne } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('ficheDeProposition')
export class ficheDeProposition {
  @ObjectIdColumn()
  id: ObjectId;

  @OneToOne(() => StudentEntity)
  @JoinColumn()
  student: StudentEntity;
}
