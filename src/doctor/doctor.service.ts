import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor } from '../schemas/doctor.schema';
import { CreateDoctorDto } from '../dto/doctor.dto';

@Injectable()
export class DoctorService {
  constructor(@InjectModel('Doctor') private readonly doctorModel: Model<Doctor>) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const createdDoctor = new this.doctorModel(createDoctorDto);
    return createdDoctor.save();
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorModel.find().exec();
  }

  async findOne(id: string): Promise<Doctor> {
    return this.doctorModel.findById(id).exec();
  }

  async remove(id: string): Promise<Doctor> {
    return this.doctorModel.findByIdAndDelete(id).exec();
  }
}
