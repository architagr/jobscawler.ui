import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import random from 'random';
import { BaseRepository } from 'src/app/core/BaseRepository';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent {
  jobtitle = environment.portalName;
  loginWithOtp = true;
  otpSent = false;
  loginOtp: number = 0;
  mobileNo: string = '';
  errorMessage = '';
  otp='';

  constructor(private repo: BaseRepository, private router: Router, private dialogRef: MatDialogRef<LoginPopupComponent>){
    this.loginOtp = random.int(1000, 9999);
  }

  generateOTP(){
    this.errorMessage = '';
    if(this.mobileNo && this.mobileNo.toString().length===10){
      this.otpSent = true;
      // this.repo.create('sms','+91'+this.mobileNo).subscribe(res=>{
      //   alert('OTP Sent');
      // }, err=>{

      // });
    }
    else{
      this.errorMessage = 'Please enter valid mobile number with country code';
    }
  }

  login(){
    this.repo.create('login', '1234').subscribe(res=>{
      if(res === true){
        this.dialogRef.close();
        this.router.navigate(['candidate']);
      }
    })
  }
}
