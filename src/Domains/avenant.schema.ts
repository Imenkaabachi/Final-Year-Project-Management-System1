import { Student } from 'src/Domains/student.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type AvenantDocument = HydratedDocument<Avenant>;
@Schema()
export class Avenant {

  @Prop({ type: Types.ObjectId, ref: 'Student' , nullable: true})

  student: Student;
}

export const AvenantSchema = SchemaFactory.createForClass(Avenant);