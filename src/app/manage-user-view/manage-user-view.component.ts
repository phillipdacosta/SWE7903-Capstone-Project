import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { ServiceService } from '../service.service';
import { UserModel } from '../user.model';
import { TeamMemberModel } from '../team-member.model';
import { ManagerUserEditsComponent } from '../manager-user-edits/manager-user-edits.component';
import { AppComponent } from '../app.component';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-manage-user-view',
  templateUrl: './manage-user-view.component.html',
  styleUrls: ['./manage-user-view.component.css']
})
export class ManageUserViewComponent implements OnInit {


  @Input() members: Array<TeamMemberModel>
  update_firstName : string;
  update_lastName : string;
  update_email : string;
  update_password : string;
  update_role : string;
  get_user_id : any;

  @Input() index : number;
  indexID : string;



  constructor(private service: ServiceService,  private app : AppComponent, private manager_edits : ManagerUserEditsComponent) {

   }

  ngOnInit() {
    this.service.show_spinner  = false;
    this.indexID = this.idFromIndex();

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
          member._role = this.service.return_users[i]._role
          console.log(this.service.return_users[i]._role)
          console.log(member.id)
         
        }
      }

 
  

    this.update_firstName = member._firstName
    this.update_lastName = member._lastName
    this.update_email = member._email
    this.update_password = member._password
    this.get_user_id = member.id
    this.update_role = member._role
      console.log(this.get_user_id)
    this.service.edit_manage_firstName  = this.update_firstName
    this.service.edit_manage_lastName = this.update_lastName
    this.service.edit_manage_password  = this.update_password
    this.service.edit_manage_role  = this.update_role 
    this.service.edit_manage_email = this.update_email 
    this.service.get_user_id = this.get_user_id 
    this.app.manageUsersEditsPage();


   
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

  idFromIndex(){
    return "#" + this.index
  }

}

