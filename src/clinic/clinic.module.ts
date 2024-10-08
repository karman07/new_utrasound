import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClinicController } from './clinic.controller';
import { ClinicService } from './clinic.service';
import { ClinicSchema } from '../schemas/clinic.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Clinic', schema: ClinicSchema }]),
  ],
  controllers: [ClinicController],
  providers: [ClinicService],
})
export class ClinicModule {}
