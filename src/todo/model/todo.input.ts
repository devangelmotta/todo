import { OmitType } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateTodoInput {
  @IsString()
  title: string

  @IsString()
  status: string

  @IsString()
  priority: string

  @IsString()
  type: string
}

export class UpdateTodoInput extends CreateTodoInput{}