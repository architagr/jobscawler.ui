import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LoginPopupComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatDialogModule
  ],
  entryComponents:[
    LoginPopupComponent 
  ]
})
export class MainModule { }
