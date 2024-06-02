import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from "mongoose";
import { User } from "./user.schema";
import { Section } from './section.enum';

export type AgentDirectionDocument = HydratedDocument<AgentDirection>;

@Schema()
export class AgentDirection extends User {

  @Prop(String)
  sections: Section;

}

export const AgentDirectionSchema = SchemaFactory.createForClass(AgentDirection);
