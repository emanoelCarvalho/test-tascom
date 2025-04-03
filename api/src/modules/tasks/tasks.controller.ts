import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('api/v1/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createTask(@Body() createTaskDto: any): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body() updateTaskDto: any,
  ): Promise<[number, Task[]]> {
    return this.tasksService.update(id, updateTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<void> {
    return this.tasksService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/filterByTags')
  filterTasksByTags(@Body('tags') tags: string[]): Promise<Task[]> {
    return this.tasksService.findByTags(tags);
  }
}
