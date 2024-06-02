import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentDirectionController } from './agent-direction.controller';
import { AppService } from '../../app.service';
import { AgentDirectionService } from './agent-direction.service';
import { AgentDirection, AgentDirectionSchema } from "../../Domains/agentDirection.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AgentDirection.name, schema: AgentDirectionSchema }
    ])
  ],
  controllers: [AgentDirectionController],
  providers: [AgentDirectionService, AppService],
  exports: [AgentDirectionService]
})
export class AgentDirectionModule {}
