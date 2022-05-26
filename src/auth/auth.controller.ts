import { Body, Controller, Post, Request} from "@nestjs/common";
import { AuthDTO } from "src/dto/auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

}
