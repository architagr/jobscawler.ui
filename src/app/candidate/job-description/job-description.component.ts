import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseRepository } from 'src/app/core/BaseRepository';
import { JobDetail, JobResponse } from 'src/app/models/jobDetails';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent {
  job: JobDetail;
  constructor(private route: ActivatedRoute, private repository: BaseRepository){
    
  }

  ngOnInit(){
    this.getJobDetail(this.route.snapshot.params["id"]);
  }

  getJobDetail(jobId: string){
    console.log("jobId: "+jobId);
    this.repository.getOne("getJobDetail/"+ jobId, null).subscribe((result:JobDetail)=>{
      this.job = result;
    });
  }
}
