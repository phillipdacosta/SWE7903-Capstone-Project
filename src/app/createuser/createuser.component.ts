import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../user.model';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  user: UserModel ;
  roles: Array<string>;
  show_expiration_flag : Boolean = false;
  get_token : any;
  hide_create_user_button : boolean = false;
  status : string = ""

  @ViewChild('myForm', {static : true}) formValues; 


  constructor(private service : ServiceService, private router : Router) {
    this.user = new UserModel();
    this.roles = ["user", "admin"]
   }

  ngOnInit() {

    if(this.user._firstName.length == 0 || this.user._lastName.length == 0|| this.user._email.length == 0 || this.user._password.length == 0 || this.user._role.length == 0){

      this.status = "disabled"
    }

    this.get_token = localStorage.getItem("auth_token")
    if(this.service.jwtHelper.isTokenExpired(this.get_token)){
 
      this.show_expiration_flag = true;
    }
    
  }


  onSubmit(){


 



    console.error("USER", JSON.stringify(this.user))
    this.service.subscribe(this.user);
    this.service.fetching();

    setTimeout(function(){
      
      this.user_created = true }, 1000);

      }
  
    }
