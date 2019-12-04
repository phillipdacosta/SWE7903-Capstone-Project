import { Component, OnInit, Input, Injectable } from '@angular/core';
import { TeamMemberModel } from '../team-member.model';
import { ServiceService } from '../service.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projectteam',
  templateUrl: './projectteam.component.html',
  styleUrls: ['./projectteam.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ProjectteamComponent implements OnInit {

  @Input() members: Array<TeamMemberModel>

  team  = [];
  team_member : any;
  name = [];


  constructor(private service: ServiceService) {
    this.team = []
   }

  ngOnInit() {
    this.service.show_spinner  = false;
   
  }

  selectUser(event, member: TeamMemberModel){
    console.log(member)

    member.id = event
    this.service.return_users.forEach((user) => {
      if(user.id === member.id){
        member.email = user.email;
        member.firstName = user.firstName
        member.lastName = user.lastName
      }
    });
    console.error("selectUser: ", this.members)
   
  }

  selectRole(event, member: TeamMemberModel){
    member.projectRoleId = event

    this.service.roles.forEach(role => {
      if(role._id == member.projectRoleId){
        member.projectRole = role.name
      }
    });

    var user_role = {

      

    }
    console.log(this.service.individual_project_id)
  

   

    var team_member = {

      
      name :  member.firstName + ' ' + member.lastName,
      role : member.projectRole,
      project_id : this.service.project_id_service
      

    }

    this.team_member = team_member;
    console.log(this.service.team_member)
    console.log(team_member)

    
    console.error("selectrole: ", this.members)

    console.log(this.service.add_member_project_id)
    console.log(this.service.the_team_id)


    for (var key in this.service.the_team) {
      var obj = this.service.the_team;
        console.log(obj)
  }

  

    console.log(this.team_member)




      console.log(this.service.the_project)

      console.log(this.service.team)
      this.service.team
    
       



        this.service.team.push(this.team_member)


  
    console.log(this.service.team)
 
  }


}
