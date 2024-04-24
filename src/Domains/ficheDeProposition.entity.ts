import { StudentEntity } from 'src/Domains/student.entity';
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity('ficheDeProposition')
export class ficheDeProposition {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => StudentEntity)
    @JoinColumn()
    student: StudentEntity;
}