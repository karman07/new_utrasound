import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from '../dto/doctor.dto';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  async findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.doctorService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.doctorService.remove(id);
  }
}
