import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from "./dto/create-todo.dto";
import {User, UserDocument} from "../users/schemas/user.schema";
import {ITodo} from "./interfaces/ITodo";

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private productModel: Model<TodoDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.productModel.find().exec();
  }

  async createTodo(todo: CreateTodoDto): Promise<Todo> {
    const newTodo = new this.productModel(todo);
    return newTodo.save();
  }

  async todoForUser(todo: CreateTodoDto, login: string): Promise<User> {
    return this.userModel.findOneAndUpdate({login: login}, {$push: { todos: todo}});
  }

  async getUserTodos(login: string): Promise<ITodo[]> {
    const user = await this.userModel.findOne({login: login});
    return user.todos;
  }

  async deleteTask(login: string, task: string) {
    const user = await this.userModel.findOne({login: login});
    const todos = user.todos;
    user.todos = todos.filter(el => el.title !== task);
    return user.save();
  }

  async onComplete(login: string, task: string) {
    const user = await this.userModel.findOne({login: login});
    const todos = user.todos;
    user.todos = todos.map(el => {
      if (el.title === task) {
        return {...el, completed: true};
      }
      return el;
    });
    return user.save();
  }
}
