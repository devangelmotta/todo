import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose'
import { BookSchema, Book } from './model/book.schema';

@Module({
  imports: [
    MongooseModule
        .forFeature([{
             name: Book.name, 
             schema: BookSchema,
             }])
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
