import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('entreprise')
export class Entreprise {
  @ObjectIdColumn()
  id: ObjectId;

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
