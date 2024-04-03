import { StudentEntity } from 'src/Student/entity/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

@Entity('convention')
export class convention {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => StudentEntity)
    @JoinColumn()
    student: StudentEntity;
}