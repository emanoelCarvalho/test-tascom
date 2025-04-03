import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './task.model';
import { Tag } from 'src/modules/tags/tag.model';
import { TaskTag } from './task-tag.model';
import { LoggerModule } from 'src/config/logger/logger.module';

@Module({
  imports: [SequelizeModule.forFeature([Task, Tag, TaskTag]), LoggerModule], 
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
