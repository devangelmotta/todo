import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Todo } from './model/todo.schema'
import { Model } from 'mongoose'
import { CreateTodoInput, UpdateTodoInput } from './model/todo.input'
import { TodoPayload } from './model/todo.payload'

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async createTodo(body: CreateTodoInput): Promise<TodoPayload> {
    const createdTodo = new this.todoModel(body)
    const todo = await createdTodo.save()
    return todo
  }

  async findTodo(id: string): Promise<TodoPayload> {
    const todo = await this.todoModel.findOne({ _id: id }).exec()

    if (!todo) {
      throw new NotFoundException(`Task with id:${id} not found `)
    }
    return todo
  }

  async listTodo(): Promise<TodoPayload[]> {
    const todos = await this.todoModel.find()
    return todos
  }

  async updateTodo(id: string, body: UpdateTodoInput): Promise<TodoPayload> {
    await this.todoModel.updateOne({ _id: id }, body)
    const updatedTodo = this.todoModel.findById(id)
    return updatedTodo
  }

  async deleteTodo(id: string): Promise<void> {
    await this.todoModel.deleteOne({ _id: id })
  }

}