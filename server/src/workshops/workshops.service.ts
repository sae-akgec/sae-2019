import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Workshops } from './interface/workshops.interface';


@Injectable()
export class WorkshopsService {

  constructor(@InjectModel('Workshops') private readonly workshopModel: Model<Workshops>) { }
  // fetch all users
  async findAll(): Promise<Workshops[]> {
    const workshops = await this.workshopModel.find().exec();
    return workshops;
  }
  // Get a single plan
  async findById(plan_title): Promise<Workshops> {
    const workshop = await this.workshopModel.findById(plan_title).exec();
    return workshop;
  }
}