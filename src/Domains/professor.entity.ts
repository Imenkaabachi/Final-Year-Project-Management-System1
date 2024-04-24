import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Section } from "./section.enum";
import { StudentEntity } from "./student.entity";

@Entity('professor')
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  sections: Section[];

  @OneToMany(() => StudentEntity, student => student.supervisor)
  students: StudentEntity[];

}
