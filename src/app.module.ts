import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './api/student/student.service';
import { StudentController } from './api/student/student.controller';
import { StudentEntity } from './Domains/student.entity';
import { Professor } from './Domains/professor.entity';
import { PFE } from './Domains/pfe.entity';
import { LettreAffectation } from './Domains/LettreAffectation.entity';
import { ficheDeProposition } from './Domains/ficheDeProposition.entity';
import { Entreprise } from './Domains/entreprise.entity';
import { Department } from './Domains/departement.entity';
import { demandeConfidentialite } from './Domains/demandeConfidentialite.entity';
import { demandeAnnulation } from './Domains/demandeAnnulation.entity';
import { convention } from './Domains/convention.entity';
import { avenant } from './Domains/avenant.entity';
import { AdminService } from './api/admin/admin.service';
import { UserController } from './api/user/user.controller';
import { UserService } from './api/user/user.service';
import { UserModule } from './api/user/user.module';
import { UserEntity } from './Domains/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/passport-jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'pfeMS',
      synchronize: false,
      entities: [
        StudentEntity,
        Professor,
        PFE,
        LettreAffectation,
        ficheDeProposition,
        Entreprise,
        Department,
        demandeConfidentialite,
        demandeAnnulation,
        convention,
        avenant,
        UserEntity
      ],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default-secret-key', // Use environment variable or default key
      signOptions: { expiresIn: '1d' }, 
    }),
    TypeOrmModule.forFeature([StudentEntity, UserEntity]),
    UserModule,
  ],
  controllers: [AppController, StudentController, UserController],
  providers: [AppService, StudentService, AdminService, UserService, JwtStrategy, ConfigService],
})
export class AppModule {}
