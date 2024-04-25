
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/Domains/user.entity';
import { PayloadInterface } from 'src/interfaces/payload.interface';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET'),
    });
  }

  async validate(payload: PayloadInterface) {
    // j'ai récupéré mon user
    console.log(payload);
    const user = await this.userRepository.findOne({ where: { email: payload.email } });
    // Si le user exste je le retourne et la automatiquement ce que je retourne dans validate
    // est mis dans le request
    if (user) {
        delete user.salt;
        delete user.password;
        return user;
    } else {
        // Si non je déclenche une erreur
        throw new UnauthorizedException();
    }

  }
}