import { Controller, Post, Body, ValidationPipe, UnprocessableEntityException, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import {UserService} from './../user/user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/auth')
@ApiTags('Auth Endpoints')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post('/login')
  async login(@Res() res, @Body(new ValidationPipe()) auth: LoginDto) {
    
    const token =  await this.authService.authenticate(auth);
    return res.status(HttpStatus.OK).json(token)
  }

  @Post('/register')
  async register(@Res() res, @Body(new ValidationPipe()) userModel: RegisterDto) {
    const emailExists = await this.userService.findByEmail(userModel.email);

    if (emailExists) {
      throw new UnprocessableEntityException('Email Already Exist');
    }
    userModel.password = await this.authService.getHash(userModel.password);
    const user = await this.userService.add(userModel);

    return res.status(HttpStatus.OK).json(user);
  }
}
