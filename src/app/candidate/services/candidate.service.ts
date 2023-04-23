import { Injectable } from '@angular/core';
import { user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor() { }

  getUser(){
    var userName = localStorage.getItem("userName");
    if(userName)
      return new user(1, 'Gaurav');
    else return new user(0, 'Null')
  }
}
