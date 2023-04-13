import { Injectable } from '@angular/core';
import { user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor() { }

  getUser(){
    return new user(0, 'Gaurav');
  }
}
