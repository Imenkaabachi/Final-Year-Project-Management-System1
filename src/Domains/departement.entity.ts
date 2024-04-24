import { Column, Entity, JoinColumn, ObjectIdColumn, OneToOne } from 'typeorm';
import { Professor } from './professor.entity';
import { ObjectId } from 'mongodb';

@Entity('department')
export class Department {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @OneToOne(() => Professor)
  @JoinColumn()
  director: Professor;
}
