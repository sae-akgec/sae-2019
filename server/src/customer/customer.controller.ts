import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('api/customers')
@ApiTags('Customer Endpoints')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    // add a customer
    @Post()
    async addCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO) {
        const customer = await this.customerService.addCustomer(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: "Customer has been created successfully",
            customer
        })
    }

    // Retrieve customers list
    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async getAllCustomer(@Res() res) {
        const customers = await this.customerService.getAllCustomer();
        return res.status(HttpStatus.OK).json(customers);
    }

    // Fetch a particular customer using ID
    @Get(':customerID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async getCustomer(@Res() res, @Param('customerID') customerID) {
        const customer = await this.customerService.getCustomer(customerID);
        if (!customer) throw new NotFoundException('Customer does not exist!');
        return res.status(HttpStatus.OK).json(customer);
    }

    @Put(':customerID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async updateCustomer(@Res() res, @Param('customerID') customerID, @Body() createCustomerDTO: CreateCustomerDTO) {
        const customer = await this.customerService.updateCustomer(customerID, createCustomerDTO);
        if (!customer) throw new NotFoundException('Customer does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Customer has been successfully updated',
            customer
        });
    }

    // Delete a customer
    @Delete(':customerID')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async deleteCustomer(@Res() res, @Param('customerID') customerID) {
        const customer = await this.customerService.deleteCustomer(customerID);
        if (!customer) throw new NotFoundException('Customer does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Customer has been deleted',
            customer
        })
    }
}