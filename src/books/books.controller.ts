import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateBookInput } from './model/book.input';
import { BooksService } from './books.service';

@Controller({
    path: 'books',
    version: '1',
  })
export class BooksController {
    constructor(
        private bookService: BooksService
    ){}

  @Post()
  createTodo(@Body() body: CreateBookInput) {
    return this.bookService.createBook(body)
  }

  @Get()
  listTodo() {
    return this.bookService.listBooks()
  }

  @Get('/:id')
  findTodo(@Param('id') id: string) {
    return this.bookService.findBook(id)
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() body: CreateBookInput) {
    return this.bookService.updateBook(id, body)
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.bookService.deleteBook(id)
  }


}
