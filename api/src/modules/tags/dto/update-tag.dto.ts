import { PartialType } from "@nestjs/mapped-types";
import { CreateTagDto } from "./create-tag.dto";

export class UpdateTaskDto extends PartialType(CreateTagDto) {}