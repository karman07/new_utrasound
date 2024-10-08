import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BaseDocument = Document & {
  createdAt: Date;
  updatedAt: Date;
};

@Schema({ timestamps: true })
export class BaseSchema {
  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const BaseSchemaFactory = SchemaFactory.createForClass(BaseSchema);
