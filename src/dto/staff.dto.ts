import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  @IsString()
  readonly StaffId: string;

  @IsNotEmpty()
  @IsString()
  readonly StaffName: string;

  @IsNotEmpty()
  @IsString()
  readonly Role: string;

  @IsNotEmpty()
  @IsString()
  readonly Uid: string;
}
