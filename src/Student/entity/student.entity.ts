import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
