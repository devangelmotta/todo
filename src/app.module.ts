import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { MongooseModule } from '@nestjs/mongoose'

const DB_URI = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_USER}@cluster0.ynatajt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
