import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ImageDocument = HydratedDocument<Image>

@Schema({ collection: 'images', timestamps: true })
export class Image {
    
    @Prop()
    title: string

    @Prop({ type: Array<string>})
    tags: Array<string>

    @Prop()
    category: string

    @Prop()
    autor: string

    @Prop()
    image: string

    @Prop()
    aspectRatio: number

    @Prop()
    format: string

    @Prop()
    size: number

    @Prop()
    downloads: number   
}

export const ImageSchema = SchemaFactory.createForClass(Image)