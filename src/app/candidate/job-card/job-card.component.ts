import { Component, Input } from '@angular/core';
import { JobDetail } from 'src/app/models/jobDetails';

@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job: JobDetail;
}
