import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Team } from '../team.model';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.css']
})
export class CompletedProjectsComponent implements OnInit {

  test : any = '';
  display_data : any;
  calendarPlugins = [dayGridPlugin]; 
  get_token : any;
  show_expiration_flag : Boolean = false;

  constructor(private service : ServiceService, public http: HttpClient) { }

  ngOnInit() {

   this.service.fetching();
   /*
   this.get_token = localStorage.getItem("auth_token")
   if(this.service.jwtHelper.isTokenExpired(this.get_token)){

     this.show_expiration_flag = true;
   }
   */

  }

  save(){ 

    this.service.fromCompletedProjects(this.test)

}

display(){

 // this.test = this.service.data_received;
  console.log(this.test)
 // this.display_data = localStorage.getItem('message')
}






}
