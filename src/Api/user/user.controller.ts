import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common';
import { LoginCredentialsDto } from './dto/LoginCredentials.dto';
import { UserService } from './user.service';
import { User } from "../../Domains/user.schema";

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
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
