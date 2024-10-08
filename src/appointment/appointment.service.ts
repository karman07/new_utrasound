import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment } from '../schemas/appointment.schema';
import { CreateAppointmentDto } from '../dto/appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(@InjectModel('Appointment') private readonly appointmentModel: Model<Appointment>) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const createdAppointment = new this.appointmentModel(createAppointmentDto);
    return createdAppointment.save();
  }

  async findAll(): Promise<Appointment[]> {
    return this.appointmentModel.find().exec();
  }

  async findOne(id: string): Promise<Appointment> {
    return this.appointmentModel.findById(id).exec();
  }

  async remove(id: string): Promise<Appointment> {
    return this.appointmentModel.findByIdAndDelete(id).exec();
  }
}
