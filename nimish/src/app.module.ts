import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { registerModule } from './register/register.module';
import * as config from '../config.js';

@Module({
  imports: [registerModule, MongooseModule.forRoot(config.URI)],
  controllers: [],
  providers: [],
})
export class AppModule { }
