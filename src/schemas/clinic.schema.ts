import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Clinic extends Document {
  @Prop({ required: true })
  ClinicId: string;

  @Prop({ required: true })
  ClinicName: string;

  @Prop({ required: true })
  Email: string;

  @Prop({ type: [{ ImageUrl: String, SceneName: String }], required: true })
  Images: { ImageUrl: string; SceneName: string }[];

  @Prop({ required: true })
  Uid: string;
}

export const ClinicSchema = SchemaFactory.createForClass(Clinic);
