import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDTO } from './dto/create-contact.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('api/contacts')
@ApiTags('Contact Endpoints')
export class ContactController {
    constructor(private contactService: ContactService) { }

    // add a contact
    @Post()
    async addContact(@Res() res, @Body() createContactDTO: CreateContactDTO) {
        const contact = await this.contactService.addContact(createContactDTO);
        return res.status(HttpStatus.OK).json({
            message: "Contact has been created successfully",
            contact
        })
    }

    // Retrieve contacts list
    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async getAllContact(@Res() res) {
        const contacts = await this.contactService.getAllContact();
        return res.status(HttpStatus.OK).json(contacts);
    }

    // Fetch a particular contact using ID
    @Get(':contactID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async getContact(@Res() res, @Param('contactID') contactID) {
        const contact = await this.contactService.getContact(contactID);
        if (!contact) throw new NotFoundException('Contact does not exist!');
        return res.status(HttpStatus.OK).json(contact);
    }

    @Put(':contactID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async updateContact(@Res() res, @Param('contactID') contactID, @Body() createContactDTO: CreateContactDTO) {
        const contact = await this.contactService.updateContact(contactID, createContactDTO);
        if (!contact) throw new NotFoundException('Contact does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Contact has been successfully updated',
            contact
        });
    }

    // Delete a contact
    @Delete(':contactID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async deleteContact(@Res() res, @Param('contactID') contactID) {
        const contact = await this.contactService.deleteContact(contactID);
        if (!contact) throw new NotFoundException('Contact does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Contact has been deleted',
            contact
        })
    }
}