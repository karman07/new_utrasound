import { IsString } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  Degree: string;

  @IsString()
  Description: string;

  @IsString()
  doctorName: string;

  @IsString()
  imageUrl: string;
}
