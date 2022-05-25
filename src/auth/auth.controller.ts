import { Body, Controller, Post } from "@nestjs/common";
import { AuthDTO } from "src/dto/auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() dto: AuthDTO) {
        return this.authService.login(dto)
    }
    
    // @Post('register')
    // register(@Body() dto: AuthDTO) {
    //     return this.authService.register(dto)
    // }
}
