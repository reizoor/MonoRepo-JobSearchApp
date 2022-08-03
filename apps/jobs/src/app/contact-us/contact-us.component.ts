import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}
  phones:string[] = [
    "+507 123-4568",
    "+507 999-6767"
  ];

  emails:string[] = [
    "jobsearch@jobsearch.com",
    "postulation@jobsearch.com"
  ];
  ngOnInit(): void {}
}
