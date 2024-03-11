import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoModule } from './todo/todo.module';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { MongooseModule } from '@nestjs/mongoose'
import { BooksModule } from './books/books.module';

const DB_URI = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.ynatajt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({throttlers: [{limit: 10, ttl: 60}]}),
    MongooseModule.forRoot(DB_URI),
    TodoModule,
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
