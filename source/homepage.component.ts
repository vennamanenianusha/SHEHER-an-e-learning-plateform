import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor() { 
  }

  ngOnInit(): void {
  }
  openForm() {
    (<HTMLInputElement>document.getElementById('myForm')).style.display = "block";
  }
  closeForm() {
    (<HTMLInputElement>document.getElementById('myForm')).style.display = "none";
  }

}