import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from "./user.schema";
import { Section } from './section.enum';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student extends User {

  @Prop({ maxlength: 8 })
  cin: string;

  @Prop({ maxlength: 8 })
  phone: string;

  @Prop({ type: Date })
  dateOfBirth: Date;

  @Prop({ maxlength: 7 })
  inscriptionNumber: string;

  @Prop({ type: String, enum: Section })
  section: Section;

  @Prop()
  pfeId: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
