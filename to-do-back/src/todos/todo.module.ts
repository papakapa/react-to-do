import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Todo, TodoSchema } from "./schemas/todo.schema";
import {User, UserSchema} from "../users/schemas/user.schema";

@Module({
  imports: [ MongooseModule.forFeature([
    {name: Todo.name, schema: TodoSchema},
    {name: User.name, schema: UserSchema}
    ])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
