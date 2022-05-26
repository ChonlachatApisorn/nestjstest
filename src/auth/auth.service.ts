import {Request, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDTO } from 'src/dto/auth.dto';
import { UserRegisSchema } from 'src/Schemas/user.Schema';
import { UserService } from 'src/user/user.service';
const Users = require('../Schemas/user.Schema');

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
        ) {}
    
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByName(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
        }
    
        async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };    

    // async login(@Request() authDto: AuthDTO) {

    //     // get user input
    //     const { username, password } = authDto;
    //     if (!(username && password)) {
    //         console.log("All input is requried")
    //     }

    //     // const user = await UserRegisSchema.
    //     const user =Users.findOne((User) => User.username === authDto.username);
    //     if (!user) throw new UnauthorizedException('Credentials incorrect');
    //     if (user.password !== authDto.password) 
    //         throw new UnauthorizedException('Credentials incorrect');
        
    //     return this.signUser(user.id, user.username, 'user');
    // }

    // signUser(id: number, username: string, type: string) {
    //     return this.jwtService.sign({
    //         sub: id,
    //         username,
    //         type: type,
    //     })
    // }

    }
}