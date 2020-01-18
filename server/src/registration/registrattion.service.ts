import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MailerService } from '@nest-modules/mailer';
import {Registration} from './interface/registration.interface';
import {CreateRegisterationDTO} from './dto/create-registration.dto';
import { async } from 'rxjs/internal/scheduler/async';
import * as nodemailer from 'nodemailer';
import * as sendgridTransport from 'nodemailer-sendgrid-transport';
import {ConfigService} from '@nestjs/config'
 

@Injectable()
export class RegistrationService {    
    constructor(@InjectModel ('Registration') private readonly registrationModel : Model<Registration>,private readonly configService: ConfigService) { }
 
    //fetching up all the registration 
    async getAllRegistration() : Promise<Registration[]> {
        const registrations = await this.registrationModel.find().exec();
        return registrations
    }

    // Get a single registeration
    async getRegistration(registrationID: any) : Promise<Registration> {
        const registeration = await this.registrationModel.findById(registrationID).exec();
        return registeration;
    }
     // posting a single registration
      async addRegistration(createRegisterationDTO:CreateRegisterationDTO): Promise<Registration> {
        const newRegistration = await this.registrationModel(createRegisterationDTO);
        this.sendMail(createRegisterationDTO.TeamName , createRegisterationDTO.Email )
        return newRegistration.save();
    }

    //Editing registration details
    async updateRegistration(registrationID: any,createRegisterationDTO:CreateRegisterationDTO): Promise<Registration>{
        const updateRegistration = await this.registrationModel
            .findByIdAndUpdate(registrationID,createRegisterationDTO, {new:true});
        return updateRegistration;    
    }

    //Deleting a registration
    async deleteRegistration(registrationID: any): Promise<any>{
        const deleteRegistration = await this.registrationModel.findByIdAndRemove(registrationID);
        return deleteRegistration;
    }    



    sendMail(TeamName: string, Email: string ) {     
        const sendgrid = this.configService.get<String>('SENDGRID_API_KEY')   
        const transporter = nodemailer.createTransport(sendgridTransport({
            auth: {
                api_key: sendgrid
            }
        }));
        transporter.sendMail({
            from: 'test@abc.com',
            to: Email,   
            subject: 'Registration Successful', 
            html: `Your team ${TeamName} has been successfully registered for Innovacion'20
                   Please complete the payment process by paying the registration fees via UPI : umangkhare1407@okhdfcbank
                   `
           })
        .then(() => {})
        .catch(() => {});
        
    }
}


