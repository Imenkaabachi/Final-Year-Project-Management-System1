import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './api/student/student.service';
import { StudentController } from './api/student/student.controller';
import { Student } from './Domains/student.schema';
import { Professor } from './Domains/professor.schema';
import { PFE } from './Domains/pfe.schema';
import { LettreAffectation } from './Domains/LettreAffectation.schema';
import { ficheDeProposition } from './Domains/ficheDeProposition.schema';
import { Entreprise } from './Domains/entreprise.schema';
import { Department } from './Domains/departement.schema';
import { demandeConfidentialite } from './Domains/demandeConfidentialite.schema';
import { demandeAnnulation } from './Domains/demandeAnnulation.schema';
import { convention } from './Domains/convention.schema';
import { avenant } from './Domains/avenant.schema';
import { AdminService } from './api/admin/admin.service';
import { UserController } from './api/user/user.controller';
import { UserService } from './api/user/user.service';
import { UserModule } from './api/user/user.module';
import { User } from './Domains/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/passport-jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'pfeMS',
      synchronize: false,
      entities: [
        Student,
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
        User
      ],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default-secret-key', // Use environment variable or default key
      signOptions: { expiresIn: '1d' }, 
    }),
    TypeOrmModule.forFeature([Student, UserEntity]),
    UserModule,
  ],
  controllers: [AppController, StudentController, UserController],
  providers: [AppService, StudentService, AdminService, UserService, JwtStrategy, ConfigService],
})
export class AppModule {}
