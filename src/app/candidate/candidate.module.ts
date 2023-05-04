import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { CandidateComponent } from './candidate.component';
import { CandidateService } from './services/candidate.service';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { JobCardComponent } from './job-card/job-card.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { HomeComponent } from './dashboard/home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    JobFilterComponent,
    CandidateComponent,
    JobDescriptionComponent,
    JobCardComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    FormsModule
  ],
  providers:[
    CandidateService
  ]
})
export class CandidateModule { }
