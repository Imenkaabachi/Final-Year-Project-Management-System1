import { forwardRef, Module } from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "../user/user.module";
import { Professor, ProfessorSchema } from "../../Domains/professor.schema";
import { ProfessorController } from "./professor.controller";
import { AppService } from "../../app.service";
import { ProfessorService } from "./professor.service";
import { DepartementModule } from "../departement/departement.module";

@Module({
  imports : [
    UserModule,
    forwardRef(() => DepartementModule),
    MongooseModule.forFeature([
      {name : Professor.name, schema : ProfessorSchema}
    ])
  ],
  controllers: [ProfessorController],
  providers: [ProfessorService, AppService],
  exports : [ProfessorService]
})
export class ProfessorModule {}