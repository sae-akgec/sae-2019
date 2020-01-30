import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param, UseGuards,UsePipes } from '@nestjs/common';
import {  RegistrationService} from './registrattion.service';
import { CreateRegisterationDTO } from './dto/create-registration.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { MailerService } from '@nest-modules/mailer';                                 //mailer service

import { request } from 'https';
import { url } from 'inspector';
import { isPrivate } from '@babel/types';

@Controller('api/teamregistration')
@ApiTags('Registration Endpoints') ///Register to Registration
export class RegistrationController {
    constructor(private registerationService: RegistrationService, private readonly mailerService: MailerService) { }

    // add a register
    @Post()
    async addRegistration(@Res() res, @Body() CreateRegisterationDTO: CreateRegisterationDTO) {
       
        const registeration = await this.registerationService.addRegistration(CreateRegisterationDTO);
        this.send(CreateRegisterationDTO.TeamName,CreateRegisterationDTO.Email)
         return res.status(HttpStatus.OK).json({
            message: "Registration has been created successfully",
            registeration
        })     
    }

    // Retrieve registeration list
    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async getAllRegistration(@Res() res) {
        const registeration = await this.registerationService.getAllRegistration();
        return res.status(HttpStatus.OK).json(registeration);
    }

    // Fetch a particular registeration using ID
    @Get(':registrationID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async getRegistration(@Res() res, @Param('registrationID') registrationID) {
        const registeration = await this.registerationService.getRegistration(registrationID);
        if (!registeration) throw new NotFoundException('Registeration does not exist!');
        return res.status(HttpStatus.OK).json(registeration);
    }

    @Put(':registrationID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async updateRegistration(@Res() res, @Param('registrationID') registrationID, @Body() CreateRegisterationDTO: CreateRegisterationDTO) {
        const registeration = await this.registerationService.updateRegistration(registrationID, CreateRegisterationDTO);
        if (!registeration) throw new NotFoundException('Register does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Registeration has been done successfully updated',
            registeration,
            

        });
    }

    // Delete a register
    @Delete(':registrationID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async deleteRegistration(@Res() res, @Param('registrationID') registrationID) {
        const registeration = await this.registerationService.deleteRegistration(registrationID);
        if (!registeration) throw new NotFoundException('Registeration does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Registeration has been deleted',
            registeration
        })
    }
    public send(TeamName: string, Email: string):void {
        this
          .mailerService
          .sendMail({
            to: Email,
            from: 'saeakgec.event@gmail.com',
            subject: 'Innovacion20 Workshop',
            template: 'email', // The `.pug` or `.hbs` extension is appended automatically.
            context: {  // Data to be sent to template engine.
              team : TeamName
            },      
          })
          .then(() => {
              console.log("Message is send successfully")
           })
          .catch(() => { 
              console.log("Messaage is not send to the team")
          });
          console.log(Email);
      }
}