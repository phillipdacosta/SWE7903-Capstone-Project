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

    this.service.fetching();

    this.time = this.service.time;

    }

}
