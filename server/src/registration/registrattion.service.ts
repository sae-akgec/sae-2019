import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MailerService } from '@nest-modules/mailer';
import {Registration} from './interface/registration.interface';
import {CreateRegisterationDTO} from './dto/create-registration.dto';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class RegistrationService {

    constructor(@InjectModel ('Registration') private readonly registrationModel : Model<Registration>,private readonly mailerService: MailerService) { }
    

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
        return newRegistration.save();
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
    
    //Code for sending mail   
    public example2(): void {
        this
          .mailerService
          .sendMail({
            to: '{{Email}}',
            from: 'rishabh2401jain@gmail.com',
            subject: 'Testing Nest Mailermodule with template ✔',
            template: 'welcome', // The `.pug` or `.hbs` extension is appended automatically.
            text: 'welcome', // plaintext body
            html: '<b>welcome</b>', // HTML body content
            // context: {  // Data to be sent to template engine.
            //   code: 'cf1a3f828287',
            //   username: 'john doe',
            // },
          })
          .then(() => {})
          .catch(() => {});
      }

}
