import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClinicModule } from './clinic/clinic.module';
import { DoctorModule } from './doctor/doctor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [    
    ConfigModule.forRoot({ isGlobal: true }), // Load environment variables globally
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB_URL'),
      }),
      inject: [ConfigService],
    }),
    ClinicModule,
    DoctorModule,],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
