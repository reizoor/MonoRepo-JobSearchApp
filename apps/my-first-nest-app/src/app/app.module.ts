import { Module } from '@nestjs/common';
import { EmployeesController } from '../employees/employees.controller';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, EmployeesController],
  providers: [AppService],
})
export class AppModule {}
