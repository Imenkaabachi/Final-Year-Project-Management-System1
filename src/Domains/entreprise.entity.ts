import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entreprise')
export class Entreprise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomEntreprise: string;

  @Column()
  pays: string;

  @Column()
  contact: string;

  @Column()
  encadrant: string;

  @Column()
  adresseEmailEncadrant: string;

  
}
