import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { FrontendMiddleware } from './middleware/frontend.middleware';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/customer.module';
import { RegisterModule } from './register/regsiter.module';
import { RegistrationModule} from './registration/registration.module'
import { WorkshopsModule} from './workshops/workshops.module'
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL || "mongodb://localhost/shopdot"),
    CustomerModule,
    UserModule,
    AuthModule,
    BlogModule,
    ContactModule,
    RegisterModule,
    RegistrationModule,
    WorkshopsModule,
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtps://rishabh2401jain@gmail.com:hetansh@123@smtp.gmail.com',
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
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "rishabh2401jain",
          pass: "hetansh@123"
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        },
      }),
    }),
      
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes(
        {
          path: '/**', // For all routes
          method: RequestMethod.ALL, // For all methods
        },
      );
  }
}
