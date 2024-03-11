import { IsNumber, IsObject, IsString } from 'class-validator'
import { IBook } from './book.types'
export class CreateBookInput {
  @IsString()
  title: string
  
  @IsNumber()
  pages: number

  @IsString()
  genre: string

  @IsString()
  cover: string

  @IsString()
  synopsis: string

  @IsNumber()
  year: number

  @IsString()
  ISBN: string

  @IsObject()
  author: object
}

export class UpdateBookInput extends CreateBookInput{}