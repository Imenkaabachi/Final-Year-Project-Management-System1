import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/Domains/user.entity';
import { Repository } from 'typeorm';
import { LoginCredentialsDto } from './dto/LoginCredentials.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwtService: JwtService
      ) {
      }
    
      async login(credentials: LoginCredentialsDto)  {
    
        // Récupére le login et le mot de passe
         const {email, password} = credentials;
        // On peut se logger ou via le username ou le password
        // Vérifier est ce qu'il y a un user avec ce login ou ce mdp
        const user = await this.userRepository.createQueryBuilder("user")
          .where("user.username = :username or user.email = :username",
            {email}
            )
          .getOne();
        // console.log(user);
        // Si not user je déclenche une erreur
    
        if (!user)
          throw new NotFoundException('username ou password erronée');
        // Si oui je vérifie est ce que le mot est correct ou pas
        const hashedPassword = await bcrypt.hash(password, user.salt);
        if (hashedPassword === user.password) {
          const payload = {
            username: user.username,
            email: user.email,
            role: user.role
          };
          const jwt = await this.jwtService.sign(payload);
          return {
            "access_token" : jwt
          };
        } else {
          // Si mot de passe incorrect je déclenche une erreur
          throw new NotFoundException('username ou password erronée');
        }
      }
    async findAll(options = null): Promise<UserEntity[]> {
    if (options) {
        return await this.userRepository.find(options);
    }
    return await this.userRepository.find();
    }
}
