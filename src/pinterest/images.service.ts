import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Image } from './model/image.schema';
import { ImagePayload } from './model/image.payload';
import { CreateImageInput, UpdateImageInput } from './model/image.input';
import {v2 as cloudinary} from 'cloudinary';
          
@Injectable()
export class ImagesService {

    constructor(@InjectModel(Image.name) private imageModel: Model<Image>) {
        cloudinary.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret: process.env.API_SECRET 
          });
    }

    async createImage(body: CreateImageInput): Promise<ImagePayload> {
        let file = body.image;
        let { secure_url } = await cloudinary.uploader.upload(file)
        body.image = secure_url;
        const createdImage = new this.imageModel(body)
        const image = await createdImage.save()
        return image
    }

    async findImage(id: string): Promise<ImagePayload> {
        const image = await this.imageModel.findOne({ _id: id }).exec()
        if (!image) {
          throw new NotFoundException(`Image with id:${id} not found `)
        }
        return image
      }
    
      async listImages(): Promise<ImagePayload[]> {
        const images = await this.imageModel.find()
        return images
      }
    
      async updateImage(id: string, body: UpdateImageInput): Promise<ImagePayload> {
        await this.imageModel.updateOne({ _id: id }, body)
        const updatedImage = this.imageModel.findById(id)
        return updatedImage
      }
    
      async deleteImage(id: string): Promise<void> {
        await this.imageModel.deleteOne({ _id: id })
      }
}
