import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AgentDirectionService } from './agent-direction.service';
import { Types } from 'mongoose';
import { AgentDirection } from "../../Domains/agentDirection.schema";

@Controller('agent-direction')
export class AgentDirectionController {
  constructor(private readonly agentDirectionService: AgentDirectionService) {}

  @Post()
  async create(@Body() agentDirection: AgentDirection): Promise<AgentDirection> {
    return await this.agentDirectionService.create(agentDirection);
  }

  @Get()
  async findAll(): Promise<AgentDirection[]> {
    return await this.agentDirectionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AgentDirection> {
    return await this.agentDirectionService.findOne(new Types.ObjectId(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() agentDirection: AgentDirection): Promise<AgentDirection> {
    return await this.agentDirectionService.update(new Types.ObjectId(id), agentDirection);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.agentDirectionService.remove(new Types.ObjectId(id));
  }
}
