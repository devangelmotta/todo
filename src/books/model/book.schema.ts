import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

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

  @Prop({type: Object})
  author: Object
}

export const BookSchema = SchemaFactory.createForClass(Book)