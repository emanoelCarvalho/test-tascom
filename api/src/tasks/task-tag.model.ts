import { Table, Model, ForeignKey } from 'sequelize-typescript';
import { Task } from './task.model';
import { Tag } from '../tags/tag.model';

@Table
export class TaskTag extends Model<TaskTag> {
  @ForeignKey(() => Task)
  taskId: number;

  @ForeignKey(() => Tag)
  tagId: number;
}
