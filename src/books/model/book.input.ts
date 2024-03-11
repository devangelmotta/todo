import { IsObject } from 'class-validator'
import { IBook } from './book.types'
export class CreateBookInput {
  @IsObject()
  book: IBook
}

export class UpdateBookInput extends CreateBookInput{}