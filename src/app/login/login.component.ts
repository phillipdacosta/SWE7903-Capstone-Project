import { Component, OnInit, ViewChild } from '@angular/core';
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
  email_reset = ''

  cred : Boolean = false;
  
  @ViewChild('myForm', {static : true}) formValues; 


   
  constructor(private service: ServiceService, private router : Router) {
     
  }
  Login() {

  console.log("you are logging in")
  console.log('cred is: ' + this.cred)
  console.log(this.cred)
 
  

  console.log(this.cred)

  
  if(this.email.length == 0 && this.password.length == 0){

    alert("Please enter a username and password")
  }
  const user = new UserModel()
  user.email = this.email;
  user.password = this.password
  this.cred = this.service.cred;

  if(this.cred){

    this.service.login(user)

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

  resetPassword(email_reset){

    this.service.passwordReset(email_reset);
  }


 
  ngOnInit() { 

    
  }
}