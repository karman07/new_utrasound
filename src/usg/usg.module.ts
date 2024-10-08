import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsgController } from './usg.controller';
import { UsgService } from './usg.service';
import { UsgSchema } from '../schemas/usg.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Usg', schema: UsgSchema }]),
  ],
  controllers: [UsgController],
  providers: [UsgService],
})
export class UsgModule {}
