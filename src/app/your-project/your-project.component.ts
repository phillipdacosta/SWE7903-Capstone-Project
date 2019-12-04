import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Team } from '../team.model';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { TeamMemberModel } from '../team-member.model';
import { ProjectComponent } from '../project/project.component';



@Component({
  selector: 'app-your-project',
  templateUrl: './your-project.component.html',
  styleUrls: ['./your-project.component.css']
})

export class YourProjectComponent implements OnInit {
  @Input() index: number;

  test : any = '';
  display_data : Array <Team>;
  count : any;
  show_expiration_flag : Boolean = false;
  get_token : any;
  members: Array<TeamMemberModel>;
  indexID: string;
  show_spinner : boolean = false;
project_count : any;

  constructor(private service : ServiceService, public http: HttpClient) { 

  }

  ngOnInit() {

   this.members = [];
   this.test = this.service.data_received;
   this.service.fetching();

 
   
   this.get_token = localStorage.getItem("auth_token")

   if(this.service.jwtHelper.isTokenExpired(this.get_token)){

     this.show_expiration_flag = true;
   }

   this.indexID = this.idFromIndex();

   }
   idFromIndex(){
    return "#" + this.index
  }

   

  save(){

    this.service.fromCompletedProjects(this.test)

}



newProject(){

  let team = new Team();
  //this.service.teamlist.push(team)
  console.log(this.service.teamlist)
  window.scrollTo({ top: 20000, behavior: 'smooth' })


}

addMember(){
  this.members.push(new TeamMemberModel);
}




}
