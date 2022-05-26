import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDTO } from 'src/dto/auth.dto';
import { UserRegisDocument, UserRegis } from '../Schemas/user.Schema'
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UserService {
    // UserService: any;

    constructor(@InjectModel(UserRegis.name) private UserRegisModel:Model<UserRegisDocument>) {}

    async create(dto: AuthDTO): Promise <UserRegis> {
        const {username, password} = dto;
    try {

        // get input data
        // const {username, password} = dto;
        // if (!(username && password )) {
        //     console.log("All input is requried")
        // }

        // encrypt password
        const encryptedPassword = password;

        // create user in database
        const userssss = await this.UserRegisModel.create({
            username,
            password: encryptedPassword
        
        })
        return userssss;
    } catch (err) {
        throw new ConflictException({
            message: ['Error']
        })
    }
    }

    async findByName(username: string): Promise<UserRegis> {
        console.log(username);
        return this.UserRegisModel.findOne({ username:username }).exec()
    }
}
