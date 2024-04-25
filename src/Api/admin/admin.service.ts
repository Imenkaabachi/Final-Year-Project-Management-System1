import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/Domains/user.entity';
import { UserSubscribeDto } from '../user/dto/UserSubscribe.dto';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
      ) {}
    
      async createUser(userData: UserSubscribeDto): Promise<UserEntity> {
        // Check if the user with the provided username/email already exists
        const existingUser = await this.userRepository.findOne({ where: [{ username: userData.email }, { email: userData.email }] });
        if (existingUser) {
          throw new UnauthorizedException('User already exists');
        }
    
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(userData.password, 10);
    
        const newUser = this.userRepository.create({
          username: userData.email,
          email: userData.email,
          password: hashedPassword,
          role: userData.role,
        });
    
        return await this.userRepository.save(newUser);
      }

}
