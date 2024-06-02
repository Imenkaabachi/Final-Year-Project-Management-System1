import { Professor } from './professor.schema';
import { Section } from './section.enum';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type DepartementDocument = HydratedDocument<Departement>;

@Schema()
export class Departement {

  @Prop([String])
  sections: Section[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Professor' })
  director: Professor;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Professor' }] })
  professors: Professor[];
}

export const DepartementSchema = SchemaFactory.createForClass(Departement);
