import { Module } from '@nestjs/common';
import { WorkshopsService } from './workshops.service';
import { WorkshopsController } from './workshops.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {  WorkshopSchema } from './schema/workshops.schema';
@Module({
  imports:[MongooseModule.forFeature([{name: 'Workshops', schema: WorkshopSchema}]),],
  providers: [WorkshopsService],
  exports:[WorkshopsService],

  controllers: [WorkshopsController]
})

export class WorkshopsModule {}


