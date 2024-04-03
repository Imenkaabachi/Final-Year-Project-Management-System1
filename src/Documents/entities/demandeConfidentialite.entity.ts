import { StudentEntity } from 'src/Student/entity/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('demandeConfidentialite')
export class demandeConfidentialite {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => StudentEntity, { nullable: true })
    @JoinColumn()
    student: StudentEntity;
}