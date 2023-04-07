import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateModule } from './candidate/candidate.module';
import { MainModule } from './main/main.module';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>MainModule
  },
  {
    path:'candidate',
    loadChildren:()=>CandidateModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
