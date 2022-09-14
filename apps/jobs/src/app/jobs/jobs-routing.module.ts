import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';

const routes: Routes = [
  {path: "job/:id", component: JobsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
