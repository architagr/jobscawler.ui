import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { JobFilterComponent } from './job-filter/job-filter.component';

const routes: Routes = [
  {
    path:'',
    component: CandidateComponent,
    children:[
      {
        path:'', component: DashboardComponent
      },
      {
        path:'search', component:JobFilterComponent
      },
      {
        path:'detail', component:JobDescriptionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
