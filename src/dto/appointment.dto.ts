import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsString()
  readonly appointmentRefId: string;

  @IsNotEmpty()
  @IsDate()
  readonly Date: Date;

  @IsNotEmpty()
  @IsNumber()
  readonly mobileNumber: number;

  @IsNotEmpty()
  @IsString()
  readonly patientName: string;

  @IsNotEmpty()
  @IsDate()
  readonly requestDate: Date;

  @IsNotEmpty()
  @IsString()
  readonly Uid: string;

  @IsNotEmpty()
  @IsString()
  readonly userId: string;
}
