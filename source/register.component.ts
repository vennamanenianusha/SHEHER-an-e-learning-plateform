import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UseropService} from '../userop.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any;
  users : any;
  c:any;
  constructor(private httpClient: HttpClient, private service:UseropService,private router: Router) { 
    this.user={userName:'',email:'',password:'',childName:'',grade:'',mobileNumber:''};
  }
  ngOnInit(): void {
    this.service.fetchDetails().subscribe((result:any)=>{
      this.users=result;
    });
    console.log("data Recieved!!!");
  }
  registerUser(){
    this.users.forEach((u : any) => {

      if(u.email === this.user.email ){
        this.c=1;
        alert("User already exist. Please LOGIN or REGISTER with NEW Mail");
      }
    });
    if(this.c!=1){
    this.service.registerUser(this.user).subscribe();
    this.router.navigate(['/curriculum']);}
  }
}