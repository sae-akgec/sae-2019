import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param, UseGuards,UsePipes } from '@nestjs/common';
import {  RegistrationService} from './registrattion.service';
import { CreateRegisterationDTO } from './dto/create-registration.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('api/teamregistration')
@ApiUseTags('Registration Endpoints') ///Register to Registration
export class RegistrationController {
    constructor(private registerationService: RegistrationService) { }

    // add a register
    @Post()
    async addRegistration(@Res() res, @Body() CreateRegisterationDTO: CreateRegisterationDTO) {
        const registeration = await this.registerationService.addRegistration(CreateRegisterationDTO);
        console.log(CreateRegisterationDTO)
        return res.status(HttpStatus.OK).json({
            message: "Registeration has been created successfully",
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
            registeration
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
}