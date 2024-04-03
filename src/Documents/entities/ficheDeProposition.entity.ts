import { StudentEntity } from 'src/Student/entity/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

@Entity('ficheDeProposition')
export class ficheDeProposition {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => StudentEntity)
    @JoinColumn()
    student: StudentEntity;
}