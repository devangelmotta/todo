import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoModule } from './todo/todo.module';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { MongooseModule } from '@nestjs/mongoose'

const DB_URI = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.ynatajt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
console.log(DB_URI)
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(DB_URI),
  TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
