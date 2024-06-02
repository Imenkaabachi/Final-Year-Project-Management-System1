import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from "src/Domains/user.schema";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findAll(options = null): Promise<User[]> {
    if (options) {
      return await this.userModel.find(options).exec();
    }
    return await this.userModel.find().exec();
  }

  async findUserByEmailWithPassword(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email }, 'email username password salt role').exec();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email }).exec();
  }


}
