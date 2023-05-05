import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  imageUrl: string;
  selectedFile: File;
  category = [
    {id:1, name:"Banking"},
    {id:2, name:"Human Resources"},
    {id:3, name:"Technology"},
    {id:4, name:"Retail"},
    {id:5, name:"Management"},
  ]

  selected = [];

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile);
  }
}
