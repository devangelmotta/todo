import { PartialType } from '@nestjs/swagger'
import { Book } from './book.schema'

export class BookPayload extends PartialType(Book) {
  createdA?: string
  updateAt?: string
}