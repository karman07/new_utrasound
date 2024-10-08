import { IsEmail, IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateClinicDto {
  @IsNotEmpty()
  @IsString()
  readonly ClinicId: string;

  @IsNotEmpty()
  @IsString()
  readonly ClinicName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly Email: string;

  @IsArray()
  readonly Images: Array<{ ImageUrl: string; SceneName: string }>;

  @IsNotEmpty()
  @IsString()
  readonly Uid: string;
}
