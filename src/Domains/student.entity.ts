import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Professor } from './professor.entity';
import { Section } from "./section.enum";

@Entity('student')
export class StudentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column()
    firstName: string;

    @Column({ length: 8 })
    cin: string;

    @Column({ length: 8 })
    phone: string;

    @Column({ type: 'date' })
    dateOfBirth: Date;

    @Column({ length: 7 })
    inscriptionNumber: string;

    @Column({ type: 'enum', enum: Section }) // Add section column
    section: Section; // Each student belongs to one section


    @ManyToOne(() => Professor, professor => professor.students)
    supervisor: Professor;
}
