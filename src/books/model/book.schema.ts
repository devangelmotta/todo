import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { IBook } from './book.types'

export type BookDocument = HydratedDocument<Book>

@Schema({ collection: 'books', timestamps: true })
export class Book {
  @Prop()
  title: string
  
  @Prop()
  pages: number

  @Prop()
  genre: string

  @Prop()
  cover: string

  @Prop()
  synopsis: string

  @Prop()
  year: number

  @Prop()
  ISBN: string

  @Prop()
  author: string
}

export const BookSchema = SchemaFactory.createForClass(Book)