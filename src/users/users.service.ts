import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) 
        private readonly userModel: typeof User,
    ) {}

    async create(createUserDto: any): Promise<User> {
        const hashedPassword = await this.hashPassword(createUserDto.password);

        const user = await this.userModel.create({
            ...createUserDto, 
            password: hashedPassword
        })

        return user
    }

    private async hashPassword(password: string) {
        return bcrypt.hash(password, 10)
    }
}
