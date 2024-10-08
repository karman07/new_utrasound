import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { BaseService } from './base.service';
import { BaseDocument } from './base.schema';

export class BaseController<T extends BaseDocument> {
  constructor(private readonly service: BaseService<T>) {}

  @Post()
  async create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
