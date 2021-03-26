import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todos/todo.module';

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb+srv://kiryl:1111@cluster0.jsjdt.mongodb.net/to-do?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
