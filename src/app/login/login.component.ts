import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
 
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';


   
  constructor(private service: ServiceService, private router : Router) {
     
  }
  Login() {

  console.log("you are logging in")
  
  
  if(this.email.length == 0 && this.password.length == 0){

    alert("Please enter a username and password")
  }

  this.service.login(this.email, this.password)
  
  if(this.service.canActivate()){
    
  }



  }

  chars(){

    if (this.email.length == 0 || this.password.length ==0){

      return false;
    } 
    return true;
  }


  routeUserToSignUp(){

    this.router.navigateByUrl("/signup")
  }


 
  ngOnInit() { 

      
    
  }
}