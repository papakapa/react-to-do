import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from "./dto/create-todo.dto";

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private productModel: Model<TodoDocument>) {
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.productModel.find().exec();
  }

  async createTodo(todo: CreateTodoDto): Promise<Todo> {
    const newTodo = new this.productModel(todo);
    return newTodo.save();
  }
}
