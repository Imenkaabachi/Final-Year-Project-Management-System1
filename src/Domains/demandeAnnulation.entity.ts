import { StudentEntity } from 'src/Domains/student.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('demandeAnnulation')
export class demandeAnnulation {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => StudentEntity, { nullable: true })
    @JoinColumn()
    student: StudentEntity;
}