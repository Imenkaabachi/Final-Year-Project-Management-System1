import { StudentEntity } from 'src/Domains/student.entity';
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity('LettreAffectation')
export class LettreAffectation {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => StudentEntity)
    @JoinColumn()
    student: StudentEntity;
}