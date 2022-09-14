import { Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateEmployeeDto } from '../app/dto/create-employee.dto';
import { Employee } from '../interface/employee.interface';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private employeeService: EmployeesService){}
    @Get(':id')
    findOne(@Param()params){
       return this.employeeService.findOne(params.id);
    }
    @Post('/create')
    async create (@Body() createEmployeeDto: CreateEmployeeDto){
        const employees = this.employeeService.findAll();
        const id = employees[employees.length - 1].id + 1;
        this.employeeService.create(id,createEmployeeDto);
    }


}
