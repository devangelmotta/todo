import { IsArray, IsMimeType, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator'

export class CreateImageInput {
  @IsString()
  title: string

  @IsArray()
  tags: Array<string>

  @IsString()
  category: string

  @IsString()
  autor: string

  @IsString()
  @IsNotEmpty()
  image: string

  @IsNumber()
  aspectRatio: number

  @IsString()
  format: string

  @IsNumber()
  size: number

  @IsNumber()
  downloads: number

}

export class UpdateImageInput extends CreateImageInput{}