import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../user.model';
import { ServiceService } from '../service.service';

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

  @ViewChild('myForm', {static : true}) formValues; 


  constructor(private service : ServiceService) {
    this.user = new UserModel();
    this.roles = ["user", "admin"]
   }

  ngOnInit() {

    this.get_token = localStorage.getItem("auth_token")
    if(this.service.jwtHelper.isTokenExpired(this.get_token)){
 
      this.show_expiration_flag = true;
    }
    
  }


  onSubmit(){
    console.error("USER", JSON.stringify(this.user))
    this.service.subscribe(this.user);
    setTimeout(function(){
      
      this.user_created = true }, 1000);

     
      }
  
    }
