import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateTodoInput } from './model/todo.input'
import { TodoService } from './todo.service'

@Controller({
  path: 'todos',
  version: '1',
})
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() body: CreateTodoInput) {
    return this.todoService.createTodo(body)
  }

  @Get()
  listTodo() {
    return this.todoService.listTodo()
  }

  @Get('/:id')
  findTodo(@Param('id') id: string) {
    return this.todoService.findTodo(id)
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() body: CreateTodoInput) {
    return this.todoService.updateTodo(id, body)
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id)
  }
}