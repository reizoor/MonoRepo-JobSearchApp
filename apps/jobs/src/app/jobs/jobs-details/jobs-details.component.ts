import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'training-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.css'],
})
export class JobsDetailsComponent implements OnInit {
  constructor() {}
  @Input() jobDescription: string = '';
  @Input() jobCompany: string = '';
    
  ngOnInit(): void {}
}
