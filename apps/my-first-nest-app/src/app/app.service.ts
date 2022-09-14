import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(userId: string): {Nombre: string, Apellido:string}{
    // return { message: 'Welcome to my-first-nest-app!' };
    const employees = {
      1: {
        name: "Irvin",
        lastname: "Nuñez"
      },
      2: {
        name: "Alex",
        lastname: "Núñez"
      }
    };
    return employees[userId];
  }
}
