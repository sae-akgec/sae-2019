import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Register } from './interface/register.interface';
import { CreateRegisterDTO } from './dto/create-register.dto';

@Injectable()
export class RegisterService {
    constructor(@InjectModel('Register') private readonly registerModel: Model<Register>) { }
    // fetch all registers
    async getAllRegister(): Promise<Register[]> {
        const registers = await this.registerModel.find().exec();
        return registers;
    }
    // Get a single register
    async getRegister(registerID): Promise<Register> {
        const register = await this.registerModel.findById(registerID).exec();
        return register;
    }
    // post a single register
    async addRegister(createRegisterDTO: CreateRegisterDTO): Promise<Register> {
        const newRegister = await this.registerModel(createRegisterDTO);
        return newRegister.save();
    }
    // Edit register details
    async updateRegister(registerID, createRegisterDTO: CreateRegisterDTO): Promise<Register> {
        const updatedRegister = await this.registerModel
            .findByIdAndUpdate(registerID, createRegisterDTO, { new: true });
        return updatedRegister;
    }
    // Delete a register
    async deleteRegister(registerID): Promise<any> {
        const deletedRegister = await this.registerModel.findByIdAndRemove(registerID);
        return deletedRegister;
    }
}