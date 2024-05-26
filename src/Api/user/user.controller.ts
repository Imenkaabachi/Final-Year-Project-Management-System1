import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common';
import { User } from 'src/Domains/user.schema';
import { LoginCredentialsDto } from './dto/LoginCredentials.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}


    @Post('login')
    login(
    @Body() credentials: LoginCredentialsDto
    ) {
        return this.userService.login(credentials);
    }

    @Get('all')
    findAll(): Promise<UserEntity[]> {
        return this.userService.findAll();
    }
}
