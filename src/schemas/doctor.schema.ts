import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Doctor extends Document {
  @Prop({ required: true })
  Degree: string;

  @Prop({ required: true })
  Description: string;

  @Prop({ required: true })
  doctorName: string;

  @Prop({ required: true })
  imageUrl: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
