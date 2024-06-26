import { Student } from 'src/Domains/student.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type DemandeConfidentialiteDocument = HydratedDocument<DemandeConfidentialite>;
@Schema()
export class DemandeConfidentialite {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student'})
  student: Student;
}

export const DemandeConfidentialiteSchema = SchemaFactory.createForClass(DemandeConfidentialite);