import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Max,
  Min,
  IsArray,
  ArrayNotEmpty,
  IsString,
} from 'class-validator';

import { Tag } from 'src/modules/tags/tag.model';

export enum TaskStatus {
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  FINALIZADO = 'FINALIZADO',
}

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status: TaskStatus;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsInt()
  @Min(1)
  @Max(10)
  priority: number;

  @IsInt()
  userId: number;

  @IsArray()
  @ArrayNotEmpty()
  tags: Tag[];
}
