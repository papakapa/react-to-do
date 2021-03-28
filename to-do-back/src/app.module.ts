import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todos/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb+srv://kiryl:1111@cluster0.jsjdt.mongodb.net/to-do?retryWrites=true&w=majority'),
    ConfigModule.forRoot(),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
