import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './tag.model';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag)
    private readonly tagModel: typeof Tag,
  ) {}

  async create(createTagDto: any): Promise<Tag> {
    return this.tagModel.create(createTagDto);
  }

  async findAll(): Promise<Tag[]> {
    return this.tagModel.findAll({ include: { all: true } });
  }

  async update(id: number, updateTagDto: any): Promise<[number, Tag[]]> {
    return this.tagModel.update(updateTagDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<void> {
    await this.tagModel.destroy({ where: { id } });
  }
}
