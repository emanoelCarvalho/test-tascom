import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private readonly taskModel: typeof Task,
  ) {}

  async create(createTaskDto: any): Promise<Task> {
    return this.taskModel.create(createTaskDto);
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll({ include: { all: true } });
  }

  async update(id: number, updateTaskDto: any): Promise<[number, Task[]]> {
    return this.taskModel.update(updateTaskDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<void> {
    await this.taskModel.destroy({ where: { id } });
  }

  async findByTags(tagNames: string[]): Promise<Task[]> {
    return this.taskModel.findAll({
      include: [
        {
          association: 'tags',
          where: { name: tagNames },
        },
      ],
    });
  }
}
