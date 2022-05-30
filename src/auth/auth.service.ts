import {Request, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { jwtConstants } from './constants';

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
        const payload = { username: user._doc.username, sub: user._doc._id };
        return {

            access_token: this.jwtService.sign(payload, {
                secret: jwtConstants.secret,
            }),
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