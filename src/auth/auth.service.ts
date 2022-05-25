import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDTO } from 'src/dto/auth.dto';
const users = require('./users.json')


@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {

    }
    
    login(dto: AuthDTO) {
        const user =users.find((_user) => _user.username === dto.username);
        if (!user) throw new UnauthorizedException('Credentials incorrect');
        if (user.password !== dto.password) 
            throw new UnauthorizedException('Credentials incorrect');
        
        return this.signUser(user.id, user.username, 'user');
    }

    signUser(id: number, username: string, type: string) {
        return this.jwtService.sign({
            sub: id,
            username,
            type: type,
        })
    }
}
