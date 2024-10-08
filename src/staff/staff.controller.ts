import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from '../dto/staff.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  async create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Get()
  async findAll() {
    return this.staffService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.staffService.remove(id);
  }
}
