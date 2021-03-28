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
    console.log(login);
    const user = await this.usersService.findUserByLogin(login);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {username: user.username, password: user.password};
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async

  async createUser(user: CreateUserDto) {
    const existingUser = await this.usersService.findUserByLogin(user.login);
    if (existingUser) {
      throw new Error('User exist');
    }
    const newUser = await this.usersService.createUser(user);
    return `User with login: ${newUser.login} created`;
  }

}
