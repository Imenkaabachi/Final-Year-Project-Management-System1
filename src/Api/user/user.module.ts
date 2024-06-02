import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/Domains/user.schema'; // Adjust the import path according to your project structure

dotenv.config();

@Module({
  imports : [
    MongooseModule.forFeature([
      {name : User.name, schema : UserSchema}
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports : [UserService]
})
export class UserModule {}
