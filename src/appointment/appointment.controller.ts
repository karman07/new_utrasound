import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from '../dto/appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  async findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.appointmentService.remove(id);
  }
}
