import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';
import {ITodo} from "../../todos/interfaces/ITodo";
import {Todo} from "../../todos/schemas/todo.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true })
  login: string

  @Prop()
  password: string

  @Prop({
    type: Types.ObjectId,
    ref: `${Todo.name}`
  })
  todos: ITodo[]
}

export const UserSchema = SchemaFactory.createForClass(User);
