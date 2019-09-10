import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { UserModel } from '../user.model';
 
 
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
  const user = new UserModel()
  user.email = this.email;
  user.password = this.password
  this.service.login(user)

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