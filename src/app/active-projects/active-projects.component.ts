import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.css']
})
export class ActiveProjectsComponent implements OnInit {

  time : any;
  show_expiration_flag : Boolean = false;
  get_token : any;
  display : any;
  constructor(private service : ServiceService) { }

  ngOnInit() {

    this.display = this.service.project.projectteam[0]._firstName

    this.time = this.service.time;
     console.log( this.time)
     /*
     this.get_token = localStorage.getItem("auth_token")
     if(this.service.jwtHelper.isTokenExpired(this.get_token)){
 
       this.show_expiration_flag = true;
     }
     */
    }

}
