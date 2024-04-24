import { StudentEntity } from 'src/Domains/student.entity';
import { Entity, JoinColumn, ObjectIdColumn, OneToOne } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('avenant')
export class avenant {
  @ObjectIdColumn()
  id: ObjectId;

  @OneToOne(() => StudentEntity, { nullable: true })
  @JoinColumn()
  student: StudentEntity;
}
