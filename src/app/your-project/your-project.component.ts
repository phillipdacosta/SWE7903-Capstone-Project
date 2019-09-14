import { Component, OnInit, Injectable } from '@angular/core';
import { Team } from '../team.model';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { TeamMemberModel } from '../team-member.model';



@Component({
  selector: 'app-your-project',
  templateUrl: './your-project.component.html',
  styleUrls: ['./your-project.component.css']
})
export class YourProjectComponent implements OnInit {

  test : any = '';
  display_data : Array <Team>;
  count : any;
  show_expiration_flag : Boolean = false;
  get_token : any;
  members: Array<TeamMemberModel>;


  constructor(private service : ServiceService, public http: HttpClient) { }

  ngOnInit() {
   this.members = [];
   this.test = this.service.data_received;
   this.service.fetching();
   this.get_token = localStorage.getItem("auth_token")
   if(this.service.jwtHelper.isTokenExpired(this.get_token)){

     this.show_expiration_flag = true;
   }
   }
   

  save(){

    this.service.fromCompletedProjects(this.test)

}



display(){

 // this.test = this.service.data_received;
  console.log(this.test)
 // this.display_data = localStorage.getItem('message')
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
