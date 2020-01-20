import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from './jwt.strategy';
import jwt from '../config/jwt';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({ 
            secret: jwt.secretOrPrivateKey,
            signOptions: {
                expiresIn: 3600
            }
        }),
        UserModule,
    ],
    providers: [ AuthService, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {

}
