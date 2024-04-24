import { StudentEntity } from 'src/Domains/student.entity';
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity('avenant')
export class avenant {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => StudentEntity, { nullable: true })
    @JoinColumn()
  student: StudentEntity;
}