import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  title: string

  @Prop()
  group: string

  @Prop()
  completed: boolean

  @Prop()
  time: string
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
