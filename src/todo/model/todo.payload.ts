import { PartialType } from '@nestjs/swagger'
import { Todo } from './todo.schema'

export class TodoPayload extends PartialType(Todo) {
  createdA?: string
  updateAt?: string
}