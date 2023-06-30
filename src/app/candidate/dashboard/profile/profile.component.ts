import { Component } from '@angular/core';
import { BaseRepository } from 'src/app/core/BaseRepository';
import { Category } from 'src/app/models/category';
import { UserDetail } from 'src/app/models/userDetail';
import { environment } from 'src/environments/environment';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  imageUrl: string;
  selectedFile: File;
  userDetail: UserDetail;
  category = [
    {id:1, name:"Banking"},
    {id:2, name:"Human Resources"},
    {id:3, name:"Technology"},
    {id:4, name:"Retail"},
    {id:5, name:"Management"},
  ]

  selected: Category[];

  constructor(private repository: BaseRepository, private service: CandidateService){
    this.userDetail = new UserDetail();
  }

  ngOnInit(){
    this.getUserProfile();
  }

  getUserProfile(){
    if(this.service.userDetail){
      this.userDetailInit(this.service.userDetail);
    }
    else {
      this.service.updateUserDetails.subscribe(res=>{
        this.userDetailInit(res);
      })
    }
  }

  userDetailInit(res:UserDetail){
    this.userDetail = res;
    let categorystr = this.userDetail.jobcategory.split(',');
    this.selected = this.category.filter(x=>categorystr.includes(x.name));
    this.imageUrl = this.userDetail.imagepath;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile);
    
  }

  saveDetails(){
    console.log(this.userDetail);
    this.userDetail.jobcategory = this.selected.map(x=>x.name).toString()
    this.repository.create(environment.UserUrl, "saveUserProfile", this.userDetail).subscribe(res=>{
      this.userDetail._id = res;
      if(this.selectedFile){
        this.repository.uploadImage(environment.UserUrl, "saveuserImage/"+res, this.selectedFile).subscribe();
      }
    });
    
  }
}
