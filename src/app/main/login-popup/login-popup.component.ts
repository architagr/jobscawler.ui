import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import random from 'random';
import { BaseRepository } from 'src/app/core/BaseRepository';
import { loginDetail } from 'src/app/models/loginDetails';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent {
  jobtitle = environment.portalName;
  loginWithOtp = false;
  otpSent = false;
  loginOtp: number = 0;
  mobileNo: string = '';
  errorMessage = '';
  otp='';
  username: string = '';
  password: string = '';

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

  login(user: string, cred: string){
    var loginObj: loginDetail = {
      loginType: this.loginWithOtp?"OTP":"credential",
      password: cred,
      userName:  user.toString()
    };
    this.repo.create(environment.LoginUrl, 'Loginuser', loginObj).subscribe(res=>{
      if(res && res.status == "OK"){
        console.log("login success");
        localStorage.setItem("info", res.data);
        localStorage.setItem("userName", loginObj.userName);
        localStorage.setItem("loginType", loginObj.loginType);
        this.dialogRef.close();
        this.router.navigate(['candidate']);
      }
      else{
        console.log("login failed");
      }
    })
  }
}
