import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.css']
})
export class ActiveProjectsComponent implements OnInit {

  time : any;

  constructor(private service : ServiceService) { }

  ngOnInit() {

    this.time = this.service.time;
     console.log( this.time)
  }

}
