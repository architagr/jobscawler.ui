import { Component } from '@angular/core';
import { BaseRepository } from 'src/app/core/BaseRepository';
import { JobDetail, JobResponse } from 'src/app/models/jobDetails';
import { JobFilter } from 'src/app/models/jobfilter';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  jobs?: JobDetail[]
  constructor(private repository: BaseRepository){}

  ngOnInit(){
    this.getJobDetails();
  }

  getJobDetails(){
    this.repository.create(environment.JobUrl, "getJobs", new JobFilter("","",20, 0)).subscribe((result:JobResponse)=>{
      this.jobs = result.jobs;
    });
  }
}
