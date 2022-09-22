import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Observable, switchMap} from 'rxjs';
import { Job } from '../../model/job';
import { JobService } from '../../services/job.service';


@Component({
  selector: 'training-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.css'],
})
export class JobsDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: JobService
    ) {}
  @Input() jobDescription = '';
  @Input() jobCompany = '';

  job$: Observable<any>;
    
  ngOnInit(): void {
    this.job$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getJob(Number(params.get('id'))))
    );
    this.job$.subscribe();
  }
}
