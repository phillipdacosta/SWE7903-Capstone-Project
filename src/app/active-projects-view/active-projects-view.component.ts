import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team.model';
import { Project } from '../project.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-active-projects-view',
  templateUrl: './active-projects-view.component.html',
  styleUrls: ['./active-projects-view.component.css']
})
export class ActiveProjectsViewComponent implements OnInit {

  @Input() index: number;

  @Input() teamlist: Team;

  indexID: string;
  project: Project;
  show_expiration_flag : Boolean = false;
  projectlist: Project ;



  constructor(private service : ServiceService) { 
    //  this.project = new Project()

      this.projectlist = new Project()
    
  }

  ngOnInit() {
    console.log(this.index)
    this.indexID = this.idFromIndex();
    console.log(this.projectlist._go_live_date)
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
