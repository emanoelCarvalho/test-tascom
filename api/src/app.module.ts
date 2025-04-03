import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { DatabaseModule } from './config/database/database.module';
import { EnvModule } from './config/env/env.module';
import { TagsModule } from './modules/tags/tags.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerModule } from './config/logger/logger.module';

@Module({
  imports: [UsersModule, TasksModule, DatabaseModule, EnvModule, TagsModule, AuthModule, LoggerModule],
})
export class AppModule {}
