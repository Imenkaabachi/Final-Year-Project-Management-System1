import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PayloadInterface } from '../interface/payload.interface';
import { UserService } from '../../user/user.service';
import { ProfessorService } from '../../professor/professor.service';
import { StudentService } from '../../student/student.service';
import { UserRoleEnum } from "../../../Domains/user-role.enum";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly professorService: ProfessorService,
    private readonly studentService: StudentService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('SECRET'),
    });
  }

  async validate(payload: PayloadInterface) {
    const user = await this.userService.findUserByEmailWithPassword(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user.role === UserRoleEnum.ADMIN) {
      return user;
    } else if (user.role === UserRoleEnum.STUDENT) {
      return this.studentService.findStudent(payload.email);
    } else if (user.role === UserRoleEnum.PROFESSOR) {
      return this.professorService.findByEmail(payload.email);
    }
  }
}
