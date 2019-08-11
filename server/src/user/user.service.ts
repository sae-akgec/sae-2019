import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './inteface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from 'src/auth/dto/register.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
  // fetch all users
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }
  // Get a single user
  async findById(userID): Promise<User> {
    const user = await this.userModel.findById(userID).exec();
    return user;
  }
  // post a single user
  async add(createUserDTO: RegisterDto): Promise<User> {
    const newUser = await this.userModel(createUserDTO);
    return newUser.save();
  }

  // Get a single user
  async findByEmail(userEmail): Promise<User> {
    const user = await this.userModel.findOne({'email': userEmail}).exec();
    return user;
  }

  // Delete a user
  async delete(userID): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID);
    return deletedUser;
  }
}