import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tag } from './tag.model';
import { Task } from 'src/modules/tasks/task.model';

@Module({
  imports: [SequelizeModule.forFeature([Tag, Task])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
