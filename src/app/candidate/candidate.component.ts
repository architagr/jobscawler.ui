import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent {
  showDropDown: boolean = false;
  userDetail?: user;

  constructor(private router: Router, private service: CandidateService){}

  ngOnInit(){
    this.userDetail = this.service.getUser();
  }

  logout(){
    this.router.navigateByUrl('/candidate/search');
  }
}
