import { Module } from '@nestjs/common';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { RegistrationController } from './registration.controller';
import { RegisterationSchema} from './schema/registration.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationService } from './registrattion.service';
import{Registration} from './interface/registration.interface'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Registration', schema: RegisterationSchema }]),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtps://user@domain.com:pass@smtp.domain.com',
        defaults: {
          from:'"nest-modules" <modules@nestjs.com>',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new HandlebarsAdapter(), // or new PugAdapter()
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService],

})
export class RegistrationModule {}
