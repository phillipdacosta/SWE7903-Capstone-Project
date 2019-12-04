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
 

  }

  save(){ 

    this.service.fromCompletedProjects(this.test)

}

}
