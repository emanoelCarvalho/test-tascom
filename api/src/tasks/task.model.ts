import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Tag } from '../tags/tag.model';
import { TaskTag } from './task-tag.model';
import { TaskStatus } from './util/task-satus.enum';

@Table
export class Task extends Model<Task> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.ENUM(...Object.values(TaskStatus)),
    allowNull: false,
    defaultValue: TaskStatus.EM_ANDAMENTO,
  })
  status: TaskStatus;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: { min: 1 },
  })
  priority: number;

  @BelongsToMany(() => Tag, () => TaskTag)
  tags: Tag[];
}
