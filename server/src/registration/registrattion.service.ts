import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Registration} from './interface/registration.interface'
import {CreateRegisterationDTO} from './dto/create-registration.dto'
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class RegistrationService {

    constructor(@InjectModel ('Registration ') private readonly registrationModel : Model<Registration>) { }
    //fetching up all the registration
    
    async getAllRegistration() : Promise<Registration[]> {
        const registrations = await this.registrationModel.find().exec();
        return registrations
    }

    // Get a single registeration
    async getRegistration(registrationID) : Promise<Registration> {
        const registeration = await this.registrationModel.findById(registrationID).exec();
        return registeration;
    }
     // posting a single registration
      async addRegistration(createRegisterationDTO:CreateRegisterationDTO): Promise<Registration> {
        const newRegistration = await this.registrationModel(createRegisterationDTO);
        return newRegistration.save()
    }

    //Editing registration details
    async updateRegistration(registrationID,createRegisterationDTO:CreateRegisterationDTO): Promise<Registration>{
        const updateRegistration = await this.registrationModel
            .findByIdAndUpdate(registrationID,createRegisterationDTO, {new:true});
        return updateRegistration;    
    }

    //Deleting a registration
    async deleteRegistration(registrationID): Promise<any>{
        const deleteRegistration = await this.registrationModel.findByIdAndRemove(registrationID);
        return deleteRegistration;
    }

}
