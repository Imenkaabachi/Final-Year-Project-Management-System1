import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './api/student/student.service';
import { StudentController } from './api/student/student.controller';
import { AdminService } from './api/admin/admin.service';
import { UserController } from './api/user/user.controller';
import { UserService } from './api/user/user.service';
import { UserModule } from './api/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/passport-jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default-secret-key', // Use environment variable or default key
      signOptions: { expiresIn: '1d' },
    }),
    UserModule,
  ],
  controllers: [AppController, StudentController, UserController],
  providers: [
    AppService,
    StudentService,
    AdminService,
    UserService,
    JwtStrategy,
  ],
})
export class AppModule {}
