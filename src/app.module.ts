import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './config/database/database.module';
import { EnvModule } from './config/env/env.module';
import { TagsModule } from './tags/tags.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TasksModule, DatabaseModule, EnvModule, TagsModule, AuthModule],
})
export class AppModule {}
