import { Student } from 'src/Domains/student.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ConventionDocument = HydratedDocument<Convention>;
@Schema()
export class Convention {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student'})
  student: Student;
}

export const  ConventionSchema = SchemaFactory.createForClass(Convention);