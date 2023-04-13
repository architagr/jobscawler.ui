import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { CandidateComponent } from './candidate.component';
import { CandidateService } from './services/candidate.service';


@NgModule({
  declarations: [
    DashboardComponent,
    JobFilterComponent,
    CandidateComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ],
  providers:[
    CandidateService
  ]
})
export class CandidateModule { }
