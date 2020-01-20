import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Registration } from './interface/registration.interface';
import { CreateRegisterationDTO } from './dto/create-registration.dto';

@Injectable()
export class RegistrationService {
  constructor(@InjectModel('Registration') private readonly registrationModel: Model<Registration>) { }


  //fetching up all the registration 
  async getAllRegistration(): Promise<Registration[]> {
    const registrations = await this.registrationModel.find().exec();
    return registrations
  }

  // Get a single registeration
  async getRegistration(registrationID: any): Promise<Registration> {
    const registeration = await this.registrationModel.findById(registrationID).exec();
    return registeration;
  }
  //Editing registration details
  async updateRegistration(registrationID: any, createRegisterationDTO: CreateRegisterationDTO): Promise<Registration> {
    const updateRegistration = await this.registrationModel
      .findByIdAndUpdate(registrationID, createRegisterationDTO, { new: true });
    return updateRegistration;
  }

  //Deleting a registration
  async deleteRegistration(registrationID: any): Promise<any> {
    const deleteRegistration = await this.registrationModel.findByIdAndRemove(registrationID);
    return deleteRegistration;
  }

  // posting a single registration
  async addRegistration(createRegisterationDTO: CreateRegisterationDTO): Promise<Registration> {
    const newRegistration = await this.registrationModel(createRegisterationDTO);
    this.sendMail(createRegisterationDTO.TeamName, createRegisterationDTO.Email)
    return newRegistration.save();

  }
  // create reusable transporter object using the default SMTP transport
  sendMail(TeamName: string, Email: string) {
    
  }

}
