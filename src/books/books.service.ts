import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Book } from './model/book.schema';
import { Model } from 'mongoose'
import { CreateBookInput, UpdateBookInput } from './model/book.input';
import { BookPayload } from './model/book.payload';

@Injectable()
export class BooksService {

    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

    async createBook(body: CreateBookInput): Promise<BookPayload> {
        const createdBook = new this.bookModel(body)
        const book = await createdBook.save()
        return book
      }
    
      async findBook(id: string): Promise<BookPayload> {
        const book = await this.bookModel.findOne({ _id: id }).exec()
    
        if (!book) {
          throw new NotFoundException(`Book with id:${id} not found `)
        }
        return book
      }
    
      async listBooks(): Promise<BookPayload[]> {
        const books = await this.bookModel.find()
        return books
      }
    
      async updateBook(id: string, body: UpdateBookInput): Promise<BookPayload> {
        await this.bookModel.updateOne({ _id: id }, body)
        const updatedBook = this.bookModel.findById(id)
        return updatedBook
      }
    
      async deleteBook(id: string): Promise<void> {
        await this.bookModel.deleteOne({ _id: id })
      }

}
