import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Staff extends Document {
  @Prop()
  name: string;

  @Prop()
  role: string;

  @Prop()
  clinic: string;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);
