import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { UserModel } from '../user.model';
import { ServiceService } from '../service.service';
import { ManageUserViewComponent } from '../manage-user-view/manage-user-view.component';
import { Router } from '@angular/router';
import { TeamMemberModel } from '../team-member.model';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileComponent } from '../profile/profile.component';



@Component({
  selector: 'app-manager-user-edits',
  templateUrl: './manager-user-edits.component.html',
  styleUrls: ['./manager-user-edits.component.css']
})
export class ManagerUserEditsComponent implements OnInit {

  user: UserModel ;
  roles: Array<string>;
  show_expiration_flag: Boolean = false;
  get_token: any;
  hide_create_user_button: boolean = false;
  _id: any;
  retype_password: any;
  no_match: boolean = false;
  confirm_password: boolean = false;
  enter_password_confirmation: string;
  display_password_fields: boolean = false;
  hide_save_button: boolean = true;
  edit_firstname : any;
  user_id_edit : any;
  close_password_block : boolean = false;


  @ViewChild('myForm', { static: true }) formValues;


  constructor(private service: ServiceService, private router : Router, private profile_page : ProfileComponent) {

    this.user = new UserModel();
    this.roles = ["user", "admin"]

  }

  ngOnInit() {

    this.loadUserProfile();

  }

  backToManageUsersPage(){

    this.router.navigateByUrl("/manage-user")
    
  }

  loadUserProfile(){

    this.user._firstName = this.service.edit_manage_firstName
    this.user._lastName = this.service.edit_manage_lastName
    this.user._email = this.service.edit_manage_email
    this.user._password = this.service.edit_manage_password
    this.user._role = this.service.edit_manage_role
    this.user_id_edit = this.service.get_user_id 
    console.log(this.user_id_edit)
    console.log(this.user._firstName)
    console.log(this.user._lastName)

  }
  

  openPasswordChange() {

    this.confirm_password = !this.confirm_password

  }

  currentPasswordCheck() {

    if (this.user._password == this.enter_password_confirmation) {

    }
  }

  submit() {

    if (this.user._password == this.enter_password_confirmation) {


      this.display_password_fields = true;
    }

  }

  closeSubmit() {

    if (this.display_password_fields) {

      this.display_password_fields = false;
    }

  }
  passwordMatch() {

    if (this.user._password !== this.retype_password && this.user._password.length == 0 && this.retype_password.length == 0) {
      console.log(this.retype_password)
      console.log(this.service.user_password)

      this.no_match = true;
      this.hide_save_button = true;

    } else {

      this.no_match = false;
      this.hide_save_button = false;

    }

    if (this.user._password.length >= 0 && this.retype_password.length >= 0 && this.user._password !== this.retype_password) {

      this.hide_save_button = false;
      this.no_match = true;


    } else {

      this.hide_save_button = true;
    }


  }


  saveNewUserProfile() {


    this.service.updateUserProfile(this.user._firstName, this.user._lastName, this.user._email, this.user._password, this.user_id_edit, this.user._role);
    this.service.edit_manage_firstName = this.user._firstName;
    this.service.edit_manage_lastName = this.user._lastName;
    this.service.edit_manage_email = this.user._email;
    this.service.edit_manage_role = this.user._role
    this.close_password_block = true;
    this.confirm_password = false;

  }

  deleteUserAccount(event, member){
 
    console.log(event)
   
    console.log(this.user_id_edit)
    this.service.deleteUserProfile(this.user_id_edit);

  }

  updateProfile(){

    this.service.set_user_name = this.user._firstName
    this.service.set_user_lastname= this.user._lastName
    this.service.get_user_email = this.user._email
    this.service.user_password = this.user._password

  }
  

}
