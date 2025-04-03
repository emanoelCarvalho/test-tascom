import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './config/database/database.module';
import { EnvModule } from './config/env/env.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [UsersModule, TasksModule, DatabaseModule, EnvModule, TagsModule],
})
export class AppModule {}
