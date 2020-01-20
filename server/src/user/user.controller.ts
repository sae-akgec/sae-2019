import { Controller, Get, HttpStatus, Param, NotFoundException, Res, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@ApiTags('User Endpoints')
@Controller('api/users')
@ApiBearerAuth()
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  async getAllUsers(@Res() res) {
    const users = await this.userService.findAll();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async getUserId(@Res() res, @Param('id') id: String) {
    const user = this.userService.findById(id);

    if (!user) throw new NotFoundException('User does not exist!');

    return res.status(HttpStatus.OK).json(user);
  }
}