import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Todo } from '../models/todo.entity';
import { T_Todo } from '../models/todo.interface';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async createTodo(todo: T_Todo): Promise<Todo> {
    return this.todoRepository.save<Todo>(todo);
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async updateTodo(todo: T_Todo): Promise<UpdateResult> {
    return this.todoRepository.update(todo.todo, todo);
  }

  async deleteTodo(todo: string): Promise<DeleteResult> {
    return this.todoRepository.delete(todo);
  }
}
