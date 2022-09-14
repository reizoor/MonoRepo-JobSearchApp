import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JobsDetailsComponent } from './jobs/jobs-details/jobs-details.component';

const routes: Routes = [
  {path: '', component: JobsListComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'jobs/:jobId', component: JobsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
