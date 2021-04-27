import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import {CreateUserDto} from '../users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController{

  constructor(private authService: AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async onLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('isAuth')
  validateToken(@Request() req) {
    return req.user;
  }

  @Post('signUp')
  async createUser(@Body('user') user: CreateUserDto) {
    return this.authService.createUser(user);
  }

}