import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDTO } from 'src/dto/auth.dto';
import { UserRegisDocument, UserRegis } from '../Schemas/user.Schema'

@Injectable()
export class UserService {

    constructor(@InjectModel(UserRegis.name) private UserRegisModel:Model<UserRegisDocument>) {}

    create(dto: AuthDTO): Promise<UserRegis> {
        const createUser = new this.UserRegisModel(dto);
        return createUser.save()
    }
}
