import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { Tag } from './tag.model';
import { TagsService } from './tags.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('api/v1/tags')
export class TagsController {
  constructor(private readonly tagService: TagsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createTask(@Body() createTagsDto: any): Promise<Tag> {
    return this.tagService.create(createTagsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllTasks(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body() uptateTagsDto: any,
  ): Promise<[number, Tag[]]> {
    return this.tagService.update(id, uptateTagsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<void> {
    return this.tagService.delete(id);
  }
}
