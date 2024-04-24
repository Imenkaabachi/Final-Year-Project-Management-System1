import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectIdColumn,
  OneToOne,
} from 'typeorm';
import { StudentEntity } from './student.entity';
import { Entreprise } from './entreprise.entity';
import { ObjectId } from 'mongodb';

@Entity('pfe')
export class PFE {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  sujet: string;

  @Column({ type: 'date' })
  dateDebut: Date;

  @Column({ type: 'date' })
  dateFin: Date;

  @Column()
  sessionDeSoutenance: string;

  @OneToOne(() => StudentEntity)
  @JoinColumn()
  student: StudentEntity;

  @ManyToOne(() => Entreprise)
  @JoinColumn()
  entreprise: Entreprise;
}
