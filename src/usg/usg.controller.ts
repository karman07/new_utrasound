import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsgService } from './usg.service';
import { CreateUsgDto } from '../dto/usg.dto';

@Controller('usg')
export class UsgController {
  constructor(private readonly usgService: UsgService) {}

  @Post()
  async create(@Body() createUsgDto: CreateUsgDto) {
    return this.usgService.create(createUsgDto);
  }

  @Get()
  async findAll() {
    return this.usgService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usgService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usgService.remove(id);
  }
}
