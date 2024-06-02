import { Student} from 'src/Domains/student.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ficheDePropositionDocument = HydratedDocument<FicheDeProposition>;
@Schema()
export class FicheDeProposition {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student'})
  student: Student;
}

export const FicheDePropositionSchema = SchemaFactory.createForClass(FicheDeProposition);