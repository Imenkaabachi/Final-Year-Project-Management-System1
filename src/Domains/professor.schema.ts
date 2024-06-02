import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from "mongoose";
import { User } from "./user.schema";
import { Departement } from "./departement.schema";

export type ProfessorDocument = HydratedDocument<Professor>;

@Schema()
export class Professor extends User {

  @Prop([String])
  pfeIds: string[];

  @Prop({ type: Types.ObjectId, ref: 'Department' }) // Define the department field
  departement: Types.ObjectId | Departement; // Professor belongs to one department
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);
