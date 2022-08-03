import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'training-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent implements OnInit {
  constructor() {}
  jobs: {title: string, company: string, description:string, location:string}[]= [
    {
      title: "Angular Junior Developer",
      company: "Prodapt",
      location: "Panama, Panama City (Remote)",
      description: 
      `Junior developer who knows: how to pass data from child to parent,
      from parent to child.
      `
    },
    {
      title: "Javascript Junior Developer",
      company: "Prodapt",
      location: "Panama, Panama City(Remote)",
      description:
      `Junior developer who know:
      -Declare variables
      -Iterables loops
      -Arrays
      -Objects
      -Async programming
      `
    },
    {
      title: "IT Support Assistant",
      company: "Prodapt",
      location: "Panama, Panama City(Remote)",
      description:
      `Junior asistant that know this things:
      -MS Office
      -Windows 11
      -Install OS (Linux and Windows)
      -Install drivers and hardware stuff
      `
    },
    {
      title: "C# ASP.Net Junior Developer",
      company: "Banco General",
      location: "Panama, Panama City (On site)",
      description:
      `Searching for junior dev who knows this things in C#:
      -Do a basic MVC app
      -Handle Entity Framework
      -MSSQL (the basic)
      `
    },
    {
      title: "DevOps Engineer",
      company: "Copa Airlines",
      location: "Panama, Panama City, Tocumen (Remote)",
      description:
      ` Devops engineer who knows:
      -Docker
      -AWS Platform (CI/CD)
      -Mongo DB
      -Kubernets
      -NodeJS
      `
    }
  ];

  company: string = '';
  description: string = '';
  index: number = 0;
  isButtonVisible: boolean = true;
  clickOption(jobIndex: number){
    let job = this.jobs[jobIndex];
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
  ngOnInit(): void {}
}
