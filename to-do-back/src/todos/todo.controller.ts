import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ClientTodoDto } from './dto/client-todo.dto';
import {User} from "../users/schemas/user.schema";

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {
  }

  @Get('all')
  async getAll(): Promise<Todo[]> {
    const notParsedTodos = await this.todoService.getAllTodos();
    return notParsedTodos.map((el) => new ClientTodoDto({title: el.title, group: el.group}));
  }

  @Post('create')
  createTodo(@Body('todo') todo: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(todo);
  }

  @Post('createForUser')
  createToDoForUser(@Body('todo') todo: CreateTodoDto, @Body('login') login: string): Promise<User> {
    return this.todoService.todoForUser(todo, login);
  }

  @Post('userTodos')
  getUserTodos(@Body('login') login: string) {
    return this.todoService.getUserTodos(login);
  }
}