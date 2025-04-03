import { IsNotEmpty, IsString, IsHexColor } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsHexColor()
  color: string; 
}
