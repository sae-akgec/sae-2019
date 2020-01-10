import { Controller, Get, HttpStatus, Param, NotFoundException, Res, UseGuards} from '@nestjs/common';
import {WorkshopsService} from './workshops.service';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';


@ApiUseTags('Workshop Endpoint')
@Controller('api/workshops')
export class WorkshopsController {
  constructor(private workshopService: WorkshopsService) { }

  @Get()
  async getAllPlans(@Res() res) {
    const plans= await this.workshopService.findAll();
    return res.status(HttpStatus.OK).json(plans);
  }

  @Get(':id')
  async getPlanId(@Res() res, @Param('id') id: String) {
    const plan = this.workshopService.findById(id);

    if (!plan) throw new NotFoundException('Plan does not exist!');

    return res.status(HttpStatus.OK).json(plan);
  }
}