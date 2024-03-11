import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
