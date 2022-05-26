import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AuthDTO } from "src/dto/auth.dto";
import * as userService from "./user.service";
import  * as bcrypt from "bcryptjs";
import { UserRegis } from "src/Schemas/user.Schema";

@Controller('user')
export class UserController {
    constructor(private UserService: userService.UserService) {}

    @Post('/register')
    async create(@Body() dto: AuthDTO) {
        return await this.UserService.create(dto);
        // return "Create User Succesed na kub eiei";
    }

    @Get(':findname')
    async findByName(@Body('username') username: string): Promise<UserRegis> {
        return this.UserService.findByName(username);
    }

}