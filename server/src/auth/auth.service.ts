import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interface/jwt-payload.interface';

@Injectable()
export class AuthService {
    private saltRounds = 10;

    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) { }

    async authenticate(auth: LoginDto) {
        const user = await this.userService.findByEmail(auth.email);
        if (!user) {
            throw new BadRequestException();
        }
        if (!await this.compareHash(auth.password, user.password)) {
            throw new BadRequestException('Invalid credentials');
        }

        return this.createJwtPayload(user);
    }

    async getHash(password: String): Promise<String> {
        return await bcrypt.hash(password, this.saltRounds);
    }

    async compareHash(password: String, hash: String): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }

    async validateUserByJwt(payload: JwtPayload) { 

        // This will be used when the user has already logged in and has a JWT
        let user = await this.userService.findById(payload.id);

        if(user){
            return user;
        } else {
            throw new UnauthorizedException();
        }

    }

    createJwtPayload(user){

        let data: JwtPayload = {
            email: user.email,
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name
        };

        let jwt = this.jwtService.sign(data);

        return {
            expiresIn: 3600,
            token: jwt            
        }

    }


}
