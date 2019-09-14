import { Component, OnInit, Input } from '@angular/core';
import { TeamMemberModel } from '../team-member.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-projectteam',
  templateUrl: './projectteam.component.html',
  styleUrls: ['./projectteam.component.css']
})
export class ProjectteamComponent implements OnInit {

  @Input() members: Array<TeamMemberModel>

  constructor(private service: ServiceService) {
   }

  ngOnInit() {

  }

  selectUser(event, member: TeamMemberModel){
    
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
    
    console.error("selectrole: ", this.members)
  }

}
