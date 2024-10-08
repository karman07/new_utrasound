import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usg } from '../schemas/usg.schema';
import { CreateUsgDto } from '../dto/usg.dto';

@Injectable()
export class UsgService {
  constructor(@InjectModel('Usg') private readonly usgModel: Model<Usg>) {}

  async create(createUsgDto: CreateUsgDto): Promise<Usg> {
    const createdUsg = new this.usgModel(createUsgDto);
    return createdUsg.save();
  }

  async findAll(): Promise<Usg[]> {
    return this.usgModel.find().exec();
  }

  async findOne(id: string): Promise<Usg> {
    return this.usgModel.findById(id).exec();
  }


  async remove(id: string): Promise<Usg> {
    return this.usgModel.findByIdAndDelete(id).exec();
  }
}
