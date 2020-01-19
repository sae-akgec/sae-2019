import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Registration} from './interface/registration.interface';
import {CreateRegisterationDTO} from './dto/create-registration.dto';
import { async } from 'rxjs/internal/scheduler/async';


const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const handlebarOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: 'src/views',
    layoutsDir: 'src/views',
    defaultLayout: 'email.body.hbs',
  },
  viewPath: 'src/views',
  extName: '.hbs',
};

@Injectable()
export class RegistrationService {    
    constructor(@InjectModel ('Registration') private readonly registrationModel : Model<Registration>) { }

    
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
   
     // posting a single registration
      async addRegistration(createRegisterationDTO:CreateRegisterationDTO): Promise<Registration> {
        const newRegistration = await this.registrationModel(createRegisterationDTO);
        this.sendMail(createRegisterationDTO.TeamName , createRegisterationDTO.Email )
       return newRegistration.save();
       
      }
        // create reusable transporter object using the default SMTP transport
        sendMail(TeamName: string, Email: string) {
          const transporter = nodemailer.createTransport({
            service:'gmail',
            host: 'smtp.gmail.email',
            port: 465,
            auth: {
              user: 'saeakgec.event@gmail.com',
              pass: ' innovation@2020'
            },
            tls: {
              rejectUnauthorized: false
            },
            
          });
          transporter.use('compile' ,hbs(handlebarOptions));
          transporter.sendMail({
            to: Email, // list of receivers
            from :'saeakgec.event@gmail.com',
            subject: `Hello ${TeamName}`, // Subject line
            text: "Hello world?", // plain tex html: `vnjdf ` // html body
            template:'email.body'
            })
          .then(() => {})
          .catch(() => {});
        }
    
  }
