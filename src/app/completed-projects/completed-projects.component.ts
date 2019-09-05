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


  constructor(private service : ServiceService, public http: HttpClient) { }

  ngOnInit() {

   this.service.fetching();
   


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
