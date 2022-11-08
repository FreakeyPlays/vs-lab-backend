import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common/decorators';
import {
  ApiAcceptedResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { T_Todo } from '../models/todo.interface';
import { TodoService } from '../service/todo.service';

@ApiTags('todo')
@Controller({ path: 'todo', version: '1' })
export class TodoController {
  @Inject(TodoService)
  private readonly service: TodoService;

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        todo: { description: 'The Title of the Todo', type: 'string' },
        priority: {
          description: 'The Priority of the Todo',
          type: 'number',
          required: ['false'],
          default: 2,
        },
      },
    },
  })
  @ApiOperation({
    summary: 'Create ToDo with content from Body',
  })
  @ApiCreatedResponse({ description: 'ToDo was Created' })
  @Post()
  public createTodo(@Body() todo: T_Todo): Promise<T_Todo> {
    return this.service.createTodo(todo);
  }

  @ApiOperation({
    summary: 'Returns all ToDos',
  })
  @ApiOkResponse({ description: 'All ToDos are Returned' })
  @Get()
  public getAllTodos(): Promise<T_Todo[]> {
    return this.service.getAllTodos();
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        todo: { description: 'The Title of the Todo', type: 'string' },
        priority: {
          description: 'The Priority of the Todo',
          type: 'number',
        },
      },
    },
  })
  @ApiOperation({
    summary: 'Updates ToDo with content from Body',
  })
  @ApiOkResponse({ description: 'ToDo was Updated' })
  @ApiNoContentResponse({
    description: 'ToDo was Updated, but got no Response',
  })
  @Put()
  public updateTodo(@Body() todo: T_Todo): Promise<UpdateResult> {
    return this.service.updateTodo(todo);
  }

  @ApiOperation({ summary: 'Deletes ToDo by ID from Path.' })
  @ApiOkResponse({ description: 'ToDo was Deleted' })
  @ApiAcceptedResponse({ description: 'ToDo will be Deleted' })
  @ApiNoContentResponse({
    description: 'ToDo was Deleted, but got no Response',
  })
  @Delete('/:identifier')
  public deleteTodo(@Param('identifier') todo: string): Promise<DeleteResult> {
    return this.service.deleteTodo(todo);
  }
}
