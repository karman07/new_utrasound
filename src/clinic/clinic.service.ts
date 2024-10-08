import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clinic } from '../schemas/clinic.schema';
import { CreateClinicDto } from '../dto/clinic.dto';

@Injectable()
export class ClinicService {
  constructor(@InjectModel('Clinic') private readonly clinicModel: Model<Clinic>) {}

  async create(createClinicDto: CreateClinicDto): Promise<Clinic> {
    const createdClinic = new this.clinicModel(createClinicDto);
    return createdClinic.save();
  }

  async findAll(): Promise<Clinic[]> {
    return this.clinicModel.find().exec();
  }

  async findOne(id: string): Promise<Clinic> {
    return this.clinicModel.findById(id).exec();
  }

  async remove(id: string): Promise<Clinic> {
    return this.clinicModel.findByIdAndDelete(id).exec();
  }
}
