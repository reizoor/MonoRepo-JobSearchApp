import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';

@NgModule({
  declarations: [JobsDetailsComponent, JobsListComponent],
  imports: [CommonModule],
  exports: [JobsDetailsComponent, JobsListComponent],
})
export class JobsModule {}
