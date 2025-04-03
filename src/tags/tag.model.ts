import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Task } from '../tasks/task.model';
import { TaskTag } from '../tasks/task-tag.model';

@Table
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @BelongsToMany(() => Task, () => TaskTag)
  tasks: Task[];
}
