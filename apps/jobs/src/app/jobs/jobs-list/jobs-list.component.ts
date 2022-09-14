import { Component } from '@angular/core';
import { Job, jobs } from '../../model/job';

@Component({
  selector: 'training-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent {
  constructor() {}
  jobs: Job[]= jobs;

  company = '';
  description = '';
  index = 0;
  isButtonVisible = true;
  clickOption(jobIndex: number){
    const job = this.jobs[jobIndex];
    this.company = job.company;
    this.description = job.description;
    this.index = jobIndex;
    this.isButtonVisible = false;
    
  }
  showButton(indexJob:number){
    return (indexJob != this.index || this.isButtonVisible);
  }
  showChild(indexJob:number){
    return (indexJob === this.index && (this.company !='' || this.description != ''))
  }
  
}
