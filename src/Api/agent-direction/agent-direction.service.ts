import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { AgentDirection, AgentDirectionDocument } from "../../Domains/agentDirection.schema";

@Injectable()
export class AgentDirectionService {
  constructor(
    @InjectModel(AgentDirection.name)
    private readonly agentDirectionModel: Model<AgentDirectionDocument>,
  ) {}

  async create(agentDirection: AgentDirection): Promise<AgentDirection> {
    const createdAgentDirection = new this.agentDirectionModel(agentDirection);
    return await createdAgentDirection.save();
  }

  async findAll(): Promise<AgentDirection[]> {
    return await this.agentDirectionModel.find().exec();
  }

  async findOne(id: ObjectId): Promise<AgentDirection> {
    return await this.agentDirectionModel.findById(id).exec();
  }

  async update(id: ObjectId, agentDirection: AgentDirection): Promise<AgentDirection> {
    await this.agentDirectionModel.findByIdAndUpdate(id, agentDirection).exec();
    return await this.findOne(id);
  }

  async remove(id: ObjectId): Promise<void> {
    await this.agentDirectionModel.findByIdAndDelete(id).exec();
  }

  findByEmail(email: string): Promise<AgentDirection | null> {
    return this.agentDirectionModel.findOne({ email }).exec();
  }
}
