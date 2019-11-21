import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { UserModel } from '../user.model';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user: UserModel ;
  user_email : any;

  constructor(private service : ServiceService, private route : Router) { }

  ngOnInit() {

  

  }

}
