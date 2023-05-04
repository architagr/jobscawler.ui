import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ngOnInit(){
    const list = document.getElementById("navigation");
    const items = list?.getElementsByTagName("li");
    if(items){
      for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function () {
          const current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].classList.remove("active");
          }
          this.classList.add("active");
        });
      }
    }
  }
}
