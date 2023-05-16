import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetail } from '../models/userDetail';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent {
  showDropDown: boolean = false;
  userDetail?: UserDetail;

  constructor(private router: Router, private service: CandidateService){}

  ngOnInit(){
    this.service.getUser();
    this.service.updateUserDetails.subscribe(res=>{
      this.userDetail = res;
    })
  }

  logout(){
    this.router.navigateByUrl('/candidate/search');
  }
}
