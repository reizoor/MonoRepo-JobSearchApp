import { Injectable } from '@angular/core';
import { jobs } from '../model/job';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getJob(id: number): Observable<any>{
    const job = jobs.find((job) => job.id === id);
    return job ? of(job): of(undefined);
  }
}
