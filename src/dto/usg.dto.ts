import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsgDto {
  @IsNotEmpty()
  @IsString()
  readonly UsgId: string;

  @IsNotEmpty()
  @IsString()
  readonly Description: string;

  @IsNotEmpty()
  @IsString()
  readonly Uid: string;
}
