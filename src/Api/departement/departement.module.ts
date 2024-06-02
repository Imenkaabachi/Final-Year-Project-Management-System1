import { forwardRef, Module } from "@nestjs/common";
import { DepartementService } from "./departement.service";
import { DepartementController } from "./departement.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Departement, DepartementSchema } from "../../Domains/departement.schema";
import { ProfessorModule } from "../professor/professor.module";

@Module({
  imports: [
    forwardRef(() => ProfessorModule),
    MongooseModule.forFeature([
      {name : Departement.name,schema : DepartementSchema}
    ])
  ],
  providers: [DepartementService],
  controllers: [DepartementController],
  exports: [DepartementService],

})
export class DepartementModule {}
