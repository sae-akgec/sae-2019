import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
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
import { ConfigModule } from '@nestjs/config';

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
    ConfigModule.forRoot({
      envFilePath: './sendgrid.env',
      isGlobal: true,
    })
      
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
