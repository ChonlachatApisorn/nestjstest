import {Request, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { jwtConstants } from './constants';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
        ) {}
    
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByName(username);
        if (user && bcrypt.compareSync(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
        }
    
        async login(user: any) {
        const payload = { username: user._doc.username, sub: user._doc._id };
        return {
            access_token: this.jwtService.sign(payload, {
                secret: jwtConstants.secret,
            }),
        };    
    }
}