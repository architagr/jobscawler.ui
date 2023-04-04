import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LoginPopupComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents:[
    LoginPopupComponent 
  ]
})
export class MainModule { }
