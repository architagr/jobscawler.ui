import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { CandidateComponent } from './candidate.component';


@NgModule({
  declarations: [
    DashboardComponent,
    JobFilterComponent,
    CandidateComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule { }
