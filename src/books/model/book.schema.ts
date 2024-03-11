import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { IBook } from './book.types'

export type BookDocument = HydratedDocument<Book>

@Schema({ collection: 'books', timestamps: true })
export class Book {
  @Prop()
  book: IBook
}

export const BookSchema = SchemaFactory.createForClass(Book)