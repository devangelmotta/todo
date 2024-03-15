import { PartialType } from '@nestjs/swagger'
import { Image } from './image.schema'

export class ImagePayload extends PartialType(Image) {
  createdA?: string
  updateAt?: string
}