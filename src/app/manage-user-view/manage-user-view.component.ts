import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { UserModel } from '../user.model';
import { TeamMemberModel } from '../team-member.model';


@Component({
  selector: 'app-manage-user-view',
  templateUrl: './manage-user-view.component.html',
  styleUrls: ['./manage-user-view.component.css']
})
export class ManageUserViewComponent implements OnInit {

  @Input() members: Array<TeamMemberModel>
  user: UserModel ;
  update_firstName : string;
  update_lastName : string;
  update_email : string;
  update_password : string;
  get_user_id : any;


  constructor(private service: ServiceService) {
    this.user = new UserModel();

   }

  ngOnInit() {
    this.service.show_spinner  = false;
    this.service.fetching();
    

  }

  selectUser(event, member: TeamMemberModel){

    console.log(member);
    
    member.id = event
    console.log(member.id)
    console.log(this.service.return_user_id)

      for (let i = 0 ; i < this.service.return_users.length ; i++){

        if( member.id == this.service.return_users[i].id ){

          member._firstName = this.service.return_users[i].firstName 
          member._lastName = this.service.return_users[i].lastName 
          member._password = this.service.return_users[i]._password
          member._email = this.service.return_users[i]._email 
          member.id = this.service.return_users[i].id 
          console.log(this.service.return_users[i]._email)


        }
      }

 
    console.error("selectUser: ", this.members)
    console.log(member._firstName)

    this.update_firstName = member._firstName
    this.update_lastName = member._lastName
    this.update_email = member._email
    this.update_password = member._password
    this.get_user_id = member.id

  }


  getUserProfile(event, member: TeamMemberModel){

    member.id = event

    this.service.return_users.forEach((member) => {
      if(member.id == this.service.user_id){

          console.log(member.id)
          console.log(this.service.user_id)

        this.user._firstName = this.service.set_user_name;
        this.user._lastName = this.service.set_user_lastname;
        this.user._email = this.service.get_user_email;
      }
    });

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

  save(){

    this.service.saveRoles(this.members, this.service.return_user_id);
    this.service.show_spinner  = true;
    this.service.fetching();
    this.service.getProjects();



  }

}

