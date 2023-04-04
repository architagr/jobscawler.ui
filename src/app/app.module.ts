import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateModule } from './candidate/candidate.module';
import { BaseRepository } from './core/BaseRepository';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    FormsModule,
    CandidateModule
  ],
  providers: [BaseRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
