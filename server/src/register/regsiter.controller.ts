import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param, UseGuards } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDTO } from './dto/create-register.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { MailerService } from '@nest-modules/mailer';                                 //mailer service

@Controller('api/registration')
@ApiTags('Register Endpoints')
export class RegisterController {
    constructor(private registerService: RegisterService ,private readonly mailerService: MailerService) { }

    // add a register
    @Post()
    async addRegister(@Res() res, @Body() createRegisterDTO: CreateRegisterDTO) {
        const register = await this.registerService.addRegister(createRegisterDTO);
        this.send(createRegisterDTO.name ,createRegisterDTO.email)
        return res.status(HttpStatus.OK).json({
            message: "Register has been created successfully",
            register
        })
    }

    // Retrieve registers list
    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async getAllRegister(@Res() res) {
        const registers = await this.registerService.getAllRegister();
        return res.status(HttpStatus.OK).json(registers);
    }

    // Fetch a particular register using ID
    @Get(':registerID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async getRegister(@Res() res, @Param('registerID') registerID) {
        const register = await this.registerService.getRegister(registerID);
        if (!register) throw new NotFoundException('Register does not exist!');
        return res.status(HttpStatus.OK).json(register);
    }

    @Put(':registerID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async updateRegister(@Res() res, @Param('registerID') registerID, @Body() createRegisterDTO: CreateRegisterDTO) {
        const register = await this.registerService.updateRegister(registerID, createRegisterDTO);
        if (!register) throw new NotFoundException('Register does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Register has been successfully updated',
            register
        });
    }

    // Delete a register
    @Delete(':registerID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async deleteRegister(@Res() res, @Param('registerID') registerID) {
        const register = await this.registerService.deleteRegister(registerID);
        if (!register) throw new NotFoundException('Register does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Register has been deleted',
            register
        })
    }
     public send(name: string, email: string):void {
        this
          .mailerService
          .sendMail({
            to: email,
            from: 'saeakgec.event@gmail.com',
            subject: 'Aacar 7.0 Workshop',
            template: 'email', // The `.pug` or `.hbs` extension is appended automatically.
            context: {  // Data to be sent to template engine.
              team : name
            },      
          })
          .then(() => {
              console.log("Message is send successfully")
           })
          .catch(() => { 
              console.log("Messaage is not send to the team")
          });
          console.log(email);
      }
}