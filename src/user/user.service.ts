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

    async create(dto: AuthDTO): Promise <UserRegis | string > {
        const {username, password} = dto;
    try {

        // get input data
        // const {username, password} = dto;
        // if (!(username && password )) {
        //     console.log("All input is requried")
        // }

        // encrypt password
        const encryptedPassword = bcrypt.hashSync(password, 10);

        // create user in database
        const userssss = new this.UserRegisModel({
            username,
            password: encryptedPassword
        
        })

        const checkUser = await this.findByName(dto.username);
        if (checkUser) {
            // console.log('User have already') ;
            return "User have already";
        } else {
            return userssss.save();
        }
    } catch (err) {
        throw new ConflictException({
            message: ['Error']
        })
    }
    }

    async findByName(username: string): Promise<UserRegis> {
        return this.UserRegisModel.findOne({ username:username }).exec()
    }
}
