import { Controller, Body, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageInput } from './model/image.input';

@Controller('pinterest')
export class PinterestController {

    constructor(
        private readonly imagesService: ImagesService
    ){}

  @Post("/create")
  createTodo(@Body() body: CreateImageInput) {
    return this.imagesService.createImage(body)
  }

  @Get()
  listTodo() {
    return this.imagesService.listImages()
  }

  @Get('/:id')
  findTodo(@Param('id') id: string) {
    return this.imagesService.findImage(id)
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() body: CreateImageInput) {
    return this.imagesService.updateImage(id, body)
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.imagesService.deleteImage(id)
  }
}

