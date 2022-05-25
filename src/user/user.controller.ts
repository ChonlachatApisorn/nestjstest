import { Body, Controller, Post } from "@nestjs/common";
import { AuthDTO } from "src/dto/auth.dto";
import * as userService from "./user.service";

@Controller('user')
export class UserController {
    constructor(private UserService: userService.UserService) {}

    @Post('register')
    async create(@Body() dto: AuthDTO) {
        await this.UserService.create(dto);
        return "Create User Succesed";
    }
}