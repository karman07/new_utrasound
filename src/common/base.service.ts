import { Model } from 'mongoose';
import { BaseDocument } from './base.schema';

export class BaseService<T extends BaseDocument> {
  constructor(private readonly model: Model<T>) {}

  async create(createDto: any): Promise<T> {
    const createdEntity = new this.model(createDto);
    return createdEntity.save();
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async update(id: string, updateDto: any): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async remove(id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
