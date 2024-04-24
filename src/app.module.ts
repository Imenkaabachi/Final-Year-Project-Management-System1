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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'pfeMS',
      synchronize: false,
      // entities: [
      //   'build/**/**.entity.js',
      //   '**/**.entity.js',
      //   'src/**/**.entity.js',
      // ],
      entities: [
        Professor,
        StudentEntity,
        PFE,
        LettreAffectation,
        ficheDeProposition,
        Entreprise,
        Department,
        demandeConfidentialite,
        demandeAnnulation,
        convention,
        avenant,
      ],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    TypeOrmModule.forFeature([StudentEntity]),
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
