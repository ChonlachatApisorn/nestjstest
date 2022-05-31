import { Body, Controller, Get, Post, Request, UseGuards} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guard/jwt-auth.guard";
import { LocalAuthGuard } from "./guard/local-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        const reqUser = req.user;
        return this.authService.login(reqUser);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile() {
        console.log('hello');
        return 'hello'
    }
}
