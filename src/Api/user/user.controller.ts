import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from "../../Domains/user.schema";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}


    @Get('all')
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
