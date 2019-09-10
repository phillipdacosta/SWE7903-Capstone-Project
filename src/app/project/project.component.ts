import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team.model';
import { ServiceService } from '../service.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() index: number;

  indexID: string;
  project: Project;
  show_expiration_flag : Boolean = false;



  constructor(private service : ServiceService) { 
      this.project = new Project()
    
  }

  ngOnInit() {
    console.log(this.index)
    this.indexID = this.idFromIndex();
    //this.service.getArrayCount();

  }

  sendToService(){

    this.service.fromCompletedProjects(this.project);
    let proj_time = Date();
    proj_time.toString();
    console.log(proj_time.toString())
    proj_time.toString() == this.service.time;

  

  }

  idFromIndex(){
    return "#" + this.index
  }

  handleClick(event){


  }



}
