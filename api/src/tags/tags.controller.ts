import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Tag } from './tag.model';
import { TagsService } from './tags.service';

@Controller('api/v1/tags')
export class TagsController {
  constructor(private readonly tagService: TagsService) {}

  @Post()
  createTask(@Body() createTagsDto: any): Promise<Tag> {
    return this.tagService.create(createTagsDto);
  }

  @Get()
  getAllTasks(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body() uptateTagsDto: any,
  ): Promise<[number, Tag[]]> {
    return this.tagService.update(id, uptateTagsDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<void> {
    return this.tagService.delete(id);
  }
}
