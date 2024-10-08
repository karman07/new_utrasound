import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff } from '../schemas/staff.sechma';
import { CreateStaffDto } from '../dto/staff.dto';

@Injectable()
export class StaffService {
  constructor(@InjectModel('Staff') private readonly staffModel: Model<Staff>) {}

  async create(createStaffDto: CreateStaffDto): Promise<Staff> {
    const createdStaff = new this.staffModel(createStaffDto);
    return createdStaff.save();
  }

  async findAll(): Promise<Staff[]> {
    return this.staffModel.find().exec();
  }

  async findOne(id: string): Promise<Staff> {
    return this.staffModel.findById(id).exec();
  }

  async remove(id: string): Promise<Staff> {
    return this.staffModel.findByIdAndDelete(id).exec();
  }
}
