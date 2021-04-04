import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import {JwtService} from "@nestjs/jwt";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByLogin(login);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {login: user.login, password: user.password};
    return {
      access_token: this.jwtService.sign(payload),
      login: user.login
    }
  }

  async createUser(user: CreateUserDto) {
    const existingUser = await this.usersService.findUserByLogin(user.login);
    if (existingUser) {
      throw new Error('User exist');
    }
    const newUser = await this.usersService.createUser(user);
    return `User with login: ${newUser.login} created`;
  }

}
