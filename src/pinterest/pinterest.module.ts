import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { Image, ImageSchema } from './model/image.schema';
import { PinterestController } from './pinterest.controller';
import { ImagesService } from './images.service';

@Module({
  imports: [
    MongooseModule
    .forFeature([{
         name: Image.name, 
         schema: ImageSchema,
      }])
  ],
  controllers: [PinterestController],
  providers: [ImagesService]
})
export class PinterestModule {}
