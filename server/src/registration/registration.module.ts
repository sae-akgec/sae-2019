import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegisterationSchema} from './schema/registration.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationService } from './registrattion.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'InnovacionRegisteration', schema: RegisterationSchema }])
  ],
  providers: [RegistrationService],
  controllers: [RegistrationController],

})
export class RegistrationModule {}
