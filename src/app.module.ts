import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      dbName: process.env.DATABASE_NAME,
      // auth: {
      //   username: process.env.DATABASE_USER,
      //   password: process.env.DATABASE_PASS,
      // },
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
