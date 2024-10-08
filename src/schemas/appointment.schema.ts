import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Appointment extends Document {
  @Prop({ required: true })
  appointmentRefId: string;

  @Prop({ required: true })
  Date: Date;

  @Prop({ required: true })
  mobileNumber: number;

  @Prop({ required: true })
  patientName: string;

  @Prop({ required: true })
  requestDate: Date;

  @Prop({ required: true })
  Uid: string;

  @Prop({ required: true })
  userId: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
