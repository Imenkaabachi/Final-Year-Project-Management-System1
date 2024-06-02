import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "../user/user.module";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";
import { Student, StudentSchema } from "../../Domains/student.schema";
import { AppService } from "../../app.service";

@Module({
  imports : [
    UserModule,
    MongooseModule.forFeature([
      {name : Student.name,schema : StudentSchema}
    ])
  ],
  controllers: [StudentController],
  providers: [StudentService,AppService],
  exports : [StudentService]
})
export class StudentModule {}