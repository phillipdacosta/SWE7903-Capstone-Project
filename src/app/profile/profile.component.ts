import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserModel } from '../user.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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


  @ViewChild('myForm', { static: true }) formValues;


  constructor(private service: ServiceService) {
    this.user = new UserModel();


  }

  ngOnInit() {

    this._id = this.service.return_user_id;
    console.log(this._id)

    this.user._firstName = this.service.set_user_name;

    this.user._lastName = this.service.set_user_lastname;
    this.user._email = this.service.get_user_email;
    console.log(this.user._password)
    console.log(this.service.user_password)

    this.user._password = this.service.user_password;


  }
  

  openPasswordChange() {

    this.confirm_password = !this.confirm_password;


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


  save() {


    this.service.updateProfile(this.user._firstName, this.user._lastName, this.user._email, this.user._password, this._id);
    this.service.set_user_name = this.user._firstName;
    this.service.set_user_lastname = this.user._lastName ;
    this.service.get_user_email = this.user._email ;

  }
  

}
