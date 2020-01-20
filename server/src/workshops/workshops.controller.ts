import { Controller, Get, HttpStatus, Param,Post,Body, NotFoundException, Res, UseGuards} from '@nestjs/common';
import {WorkshopsService} from './workshops.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import {CreateWorkshopDTO} from './dto/workshops.dto'


@ApiTags('Workshop Endpoint')
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
  @Post()
  async addWorkshop(@Res() res, @Body() CreateworkshopDTO: CreateWorkshopDTO) {
      const workshop = await this.workshopService.addWorkshop(CreateworkshopDTO);
      return res.status(HttpStatus.OK).json({
          message: "Workshop has been created successfully",
          workshop
      })
  }
}