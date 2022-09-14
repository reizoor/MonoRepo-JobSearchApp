import { Injectable } from '@nestjs/common';
import { Employee } from '../interface/employee.interface';

@Injectable()
export class EmployeesService {
    private readonly Employees :Employee[] = [];
;

    create(employee: Employee):void{
        this.Employees.push(employee);
    }

    findAll(): Employee[]{
        return this.Employees;
    }

    findOne(id: number): Employee{
        return this.Employees[id];
    }
}
