import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { BaseRepository } from 'src/app/core/BaseRepository';
import { user } from 'src/app/models/user';
import { UserDetail } from 'src/app/models/userDetail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  userDetail: UserDetail;
  updateUserDetails: Subject<UserDetail> = new Subject<UserDetail>();
  constructor(private _repository: BaseRepository) { }

  getUser(){
    if(!this.userDetail){
    var userName = localStorage.getItem("userName");
      if(userName){
        this._repository.getOne(environment.UserUrl, "getUserProfile/"+userName).subscribe(res=>{
          this.userDetail = res;
          this.updateUserDetails.next(res);
        })
      }
    }
  }
}
