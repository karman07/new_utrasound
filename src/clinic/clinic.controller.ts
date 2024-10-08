import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { CreateClinicDto } from '../dto/clinic.dto';

@Controller('clinics')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post()
  async create(@Body() createClinicDto: CreateClinicDto) {
    return this.clinicService.create(createClinicDto);
  }

  @Get()
  async findAll() {
    return this.clinicService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clinicService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.clinicService.remove(id);
  }
}
