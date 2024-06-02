import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./api/user/user.module";
import { StudentModule } from "./api/student/student.module";
import { ProfessorModule } from "./api/professor/professor.module";
import { DepartementModule } from "./api/departement/departement.module";
import { AuthModule } from "./api/auth/auth.module";
import { AgentDirectionModule } from "./api/agent-direction/agent-direction.module";
import { AppService } from "./app.service";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
    UserModule,
    StudentModule,
    ProfessorModule,
    DepartementModule,
    AuthModule,
    AgentDirectionModule,
    ConfigModule.forRoot(
      {
        isGlobal: true
      }    ),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'default-secret-key',
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




