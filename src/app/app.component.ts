import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.portalName;

  constructor(private spinner: NgxSpinnerService){
    //this.spinner.show();
  }
}
