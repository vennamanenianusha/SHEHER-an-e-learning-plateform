import { Component, OnInit } from '@angular/core';
import {UseropService} from '../userop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any;
  email : any;
  password:any;
  passwords: any;
  c:any;
  constructor(private service:UseropService, private router: Router) { 
    this.email='';
    this.password='';
  }

  ngOnInit(): void {
    this.service.fetchDetails().subscribe((result:any)=>{
      this.users=result;
    });
  }
  loginSubmit2(loginForm : any) : void{
    this.users.forEach((u : any) => {

      if(u.email === loginForm.email && u.password === loginForm.password){
        this.passwords = loginForm.password;
        this.c=1;
        this.router.navigate(['/curriculum']);
        //alert("Welcome to  Home page "+u.userName);
        
      }
    });
    if(this.c!=1){alert("Invalid LOGIN");} 
  }
}