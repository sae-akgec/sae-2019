import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegisterationSchema} from './schema/registration.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationService } from './registrattion.service';
import{Registration} from './interface/registration.interface'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Registration', schema: RegisterationSchema }])
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService],

})
export class RegistrationModule {}
