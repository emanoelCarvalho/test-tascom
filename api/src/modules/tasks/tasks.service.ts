import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';
import { Tag } from '../tags/tag.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private readonly taskModel: typeof Task,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskModel.create(createTaskDto);
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskModel.findByPk(id, {
      include: { all: true },
    });
    if (!task) {
      throw new Error('Task not found');
    }

    return task;
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

  async findByTags(tags: string[]): Promise<Task[]> {
    if (tags.length === 0) {
      return this.taskModel.findAll();
    }

    return this.taskModel.findAll({
      include: [
        {
          model: Tag,
          where: { name: tags },
          required: true,
        },
      ],
    });
  }
}
