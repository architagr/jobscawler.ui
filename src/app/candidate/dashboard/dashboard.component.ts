import { Component, OnInit } from '@angular/core';
import { BaseRepository } from 'src/app/core/BaseRepository';
import { JobDetail, JobResponse } from 'src/app/models/jobDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  jobs?: JobDetail[]
  constructor(private repository: BaseRepository){}

  ngOnInit(){
    this.getJobDetails();
  }

  getJobDetails(){
    this.repository.getAll("getJobs").subscribe((result:JobResponse)=>{
      this.jobs = result.jobs;
    });
  }
}
