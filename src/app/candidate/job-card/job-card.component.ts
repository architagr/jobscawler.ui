import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JobDetail } from 'src/app/models/jobDetails';

@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job: JobDetail;

  constructor(private _router: Router){}

  openDescription(){
    this._router.navigateByUrl("/detail/"+this.job._id);
  }
}
