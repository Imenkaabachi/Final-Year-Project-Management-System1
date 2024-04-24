import { StudentEntity } from 'src/Domains/student.entity';
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity('convention')
export class convention {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => StudentEntity)
    @JoinColumn()
    student: StudentEntity;
}