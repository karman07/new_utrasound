import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usg extends Document {
  @Prop({ required: true })
  Address: string;

  @Prop({ required: true })
  City: string;

  @Prop({ required: true })
  mobileNumber: number;

  @Prop({ required: true })
  patientName: string;

  @Prop({ required: true })
  pinCode: string;

  @Prop({ required: true })
  Prescription: string;

  @Prop({ required: true })
  receiptNumber: number;

  @Prop({ required: true })
  receiptUrl: string;

  @Prop({ required: true })
  Report: string;

  @Prop({ required: true })
  State: string;

  @Prop({ required: true })
  Uid: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  usgRefId: string;
}

export const UsgSchema = SchemaFactory.createForClass(Usg);
