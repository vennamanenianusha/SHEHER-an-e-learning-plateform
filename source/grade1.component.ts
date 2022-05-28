import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grade1',
  templateUrl: './grade1.component.html',
  styleUrls: ['./grade1.component.css']
})
export class Grade1Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(["/curriculum"]);
  }

}
