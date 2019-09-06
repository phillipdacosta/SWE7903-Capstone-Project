import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() teamlist: any;

  counter = 0;


  constructor(private service : ServiceService) { }

  ngOnInit() {

    console.log(this.teamlist)
    //this.service.getArrayCount();

  }

  sendToService(){

    this.service.fromCompletedProjects(this.teamlist);
    let proj_time = Date();
    proj_time.toString();
    console.log(proj_time.toString())
    proj_time.toString() == this.service.time;

  

  }



}
