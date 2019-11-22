import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Team } from '../team.model';
import { ServiceService } from '../service.service';
import { Project } from '../project.model';
import { TeamMemberModel } from '../team-member.model';
import { ProjectteamComponent } from '../projectteam/projectteam.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit {

  @Input() index: number;

  @Input() teamlist: Team;

  indexID: string;
  project: Project;
  show_expiration_flag : Boolean = false;
  projectlist: Project ;
  members: any;
  the_team : any;
  team1 : any;
  project_team = []
  show_team = false;

  test : any = '';
  display_data : Array <Team>;
  count : any;
  get_token : any;

  show_spinner : boolean = false;
  project_count : any;
  add_member_project_id : any;
  projectTeamArray = []
  everyone = [];
  hide_name : boolean = true;
  show_name : boolean = true;
  member : any;
  delete_team_array = [];

  constructor(private service : ServiceService, private projectTeam : ProjectteamComponent) { 
    //  this.project = new Project()

      this.projectlist = new Project()
      this.project_team = [];
    this.projectTeamArray = []
  }

  ngOnInit() {

    this.service.fetchRoles()
    this.members = [];
    this.hide_name =  true;

   // console.log(this.index)
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

    let index = this.index
    return "#" + this.index
  }

  handleClick(event){


  }

  saveTeam(){

    //Get index of project, add team object - pass in index and team object.

    console.log(this.index)
    this.service.addTeamToProjects();

  }

  addMember(event, project){

    //this.getProjectDetails(event, this.index)
    console.log(event)
    console.log(project)
    this.service.get_project_id = project;
    this.add_member_project_id = project
    this.service.add_member_project_id = this.add_member_project_id 
    console.log(this.index)
    

    
    //this.project_team.push(this.index, new TeamMemberModel)
    /*
    this.project_team.push({

      index : this.index,
      team : this.service.team
    })
*/
    this.members.push(new TeamMemberModel);
    //console.log(this.project_team)

  }

  getProjectDetails(event, project){

    console.log(project)
    this.service.team = []
    this.service.project_id = []

    this.project = project
    this.service.individual_project_id = project;
    //this.service.project_id = this.project
    console.log(this.service.project_id.push(this.project))


    
  }

  addTeamToProject(project){

    

    console.log(this.service.add_member_project_id) 
    console.log(this.service.team)
    console.log(this.project)
    this.projectTeamArray = []

  

      let the_team = {

       project :  this.service.individual_project_id,

       team:  this.service.team

      }

    console.log(the_team)
    

      this.the_team = the_team
      this.service.the_team = the_team
      this.service.the_team_id = this.the_team.project_id
      console.log(this.service.the_team_id)
      console.log(this.the_team)
      console.log(this.service.the_team)



      //this.everyone.push(this.the_team)
     // console.log(this.everyone)
     // this.service.the_team = the_team

  }

  save(the_team){


    console.log(this.the_team)
    this.addTeamToProject('');
    this.service.saveRoles(this.the_team)
    this.service.fetching();


  }

  showTeam(){

    if(this.show_team ==  false){

      this.show_team = true;
    } else {

      this.show_team = false
    }
  
  }


  deleteProjectMember(event, member){

    console.log(event)
    console.log(member)



     // console.log(member)

     

      if(this.hide_name){

        this.member = member;
        this.hide_name = false;

       
      } else {

        this.hide_name = false;
      }
       



      this.delete_team_array.push(this.member)
      console.log(this.delete_team_array)
    
    

  }



}
