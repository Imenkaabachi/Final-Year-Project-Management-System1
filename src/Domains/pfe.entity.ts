import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentEntity } from './student.entity';
import { Entreprise } from './entreprise.entity';

@Entity('pfe')
export class PFE {
  @PrimaryGeneratedColumn()
  id: number;

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
