import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TodoDocument = HydratedDocument<Todo>

@Schema({ collection: 'todos', timestamps: true })
export class Todo {
  @Prop()
  title: string

  @Prop()
  status: string

  @Prop()
  priority: string

  @Prop()
  type: string
}

export const TodoSchema = SchemaFactory.createForClass(Todo)