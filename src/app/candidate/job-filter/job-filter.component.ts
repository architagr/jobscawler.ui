import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseRepository } from 'src/app/core/BaseRepository';
import { JobDetail, JobResponse } from 'src/app/models/jobDetails';
import { JobFilter } from 'src/app/models/jobfilter';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent {
  jobs: JobDetail[]
  filter: JobFilter;
  constructor(private repository: BaseRepository, private spinner: NgxSpinnerService){
    this.filter = new JobFilter("","",20, 0);
  }

  ngOnInit(){
    this.getJobDetails();
  }

  getJobDetails(){
    this.spinner.show();
    this.repository.create(environment.JobUrl, "getJobs", this.filter).subscribe((result:JobResponse)=>{
      this.jobs = result.jobs;
      this.spinner.hide();
    });
  }
}
