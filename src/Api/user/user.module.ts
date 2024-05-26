import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { User } from 'src/Domains/user.schema';
import { JwtStrategy } from 'src/strategy/passport-jwt.strategy';
import { ConfigModule } from '@nestjs/config';


dotenv.config();
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
        secret: process.env.SECRET,
        signOptions: {
          expiresIn: 3600
        }
      })
  ],
  controllers: [
    UserController
  ],
  providers: [UserService, JwtStrategy],
  exports: [UserService]
})

@Module({})
export class UserModule {}
