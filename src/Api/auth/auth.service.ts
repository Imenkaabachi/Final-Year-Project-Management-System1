import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";
import { PayloadInterface } from "./interface/payload.interface";
import { JwtService } from "@nestjs/jwt";
import { UserRoleEnum } from "../../Domains/user-role.enum";
import { ProfessorService } from "../professor/professor.service";
import { StudentService } from "../student/student.service";
import { AgentDirectionService } from "../agent-direction/agent-direction.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly profService: ProfessorService,
    private readonly studentService: StudentService,
    private readonly agentDirectionService: AgentDirectionService,

  ) {}

  async login(credentials: LoginDto) {
    const user = await this.userService.findUserByEmailWithPassword(credentials.email);
    if (!user) {
      throw new NotFoundException('Please check your email');
    }
    const passwordMatches = await bcrypt.compare(credentials.password, user.password);
    if (!passwordMatches) {
      throw new BadRequestException('Please check your email or password');
    }
    const payload: PayloadInterface = {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      role: user.role,
    };
    const token = this.jwtService.sign(payload);
    const decodedToken = this.jwtService.verify(token);
    let returnedUser;
    if (user.role === UserRoleEnum.PROFESSOR) {
      returnedUser = await this.profService.findByEmail(user.email);
    } else if (user.role === UserRoleEnum.STUDENT) {
      returnedUser = await this.studentService.findStudent(user.email);
    }else if (user.role === UserRoleEnum.HEAD_OF_DEPARTMENT) {
      returnedUser = await this.agentDirectionService.findByEmail(user.email);
    }
    return {
      user: returnedUser,
      access_token: token,
      expiry_date: decodedToken.exp,
    };
  }
}
