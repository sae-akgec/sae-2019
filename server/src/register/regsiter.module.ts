import { Module } from '@nestjs/common';
import { RegisterController } from './regsiter.controller';
import { RegisterService } from './register.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterSchema } from './schema/register.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Register', schema: RegisterSchema }])
  ],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule { }