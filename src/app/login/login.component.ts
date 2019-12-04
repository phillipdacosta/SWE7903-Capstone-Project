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

  cred : Boolean = undefined;
  
  @ViewChild('myForm', {static : true}) formValues; 


   
  constructor(private service: ServiceService, private router : Router) {
     
  }
  Login() {




  
  if(this.email.length == 0 && this.password.length == 0){

    alert("Please enter a username and password")
  }
  const user = new UserModel()
  user.email = this.email;
  user.password = this.password

  


    let observable = this.service.login(user)
    observable.subscribe((res) => {
      this.cred = this.service.cred;
    })
    
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