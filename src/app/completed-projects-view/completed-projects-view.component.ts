import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Team } from '../team.model';
import { ServiceService } from '../service.service';
import { Project } from '../project.model';
import { TeamMemberModel } from '../team-member.model';
import { ProjectteamComponent } from '../projectteam/projectteam.component';
import {Projectteammodel} from '../projectteammodel';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-completed-projects-view',
  templateUrl: './completed-projects-view.component.html',
  styleUrls: ['./completed-projects-view.component.css']
})


export class CompletedProjectsViewComponent implements OnInit {

  @Input() index: number;

  @Input() teamlist: Team;

  @Input() project_team_model : Projectteammodel

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
  user : any;
  name : any;
  update_status : boolean = true;
  testarray = []
person : any;
final_name : any;
team_member : any;
team_team : any;
new_array = []
user_name : any;
user_role : any;
arrFiltered = []
updated_project_team = []
save_project_team : Projectteammodel;

updated_project_owner : any;

exampleinput: any;
exampleinput2 : any;
exampleinput3 : any;
exampleinput4 : any;
exampleinput5 : any;
exampleproject_id : any;
the_project_id : any;



  constructor(private service : ServiceService, private projectTeam : ProjectteamComponent) { 
    //  this.project = new Project()

      this.projectlist = new Project()
      this.project_team = [];
      this.projectTeamArray = []
      this.testarray = []
      this.new_array = []
      this.arrFiltered = []
      this.updated_project_team = []
      this.project_team_model = new Projectteammodel();

  }


  addProjectTeam(event, team){

   // this.exampleinput = this.service.exampleinput

    console.log(event)

    this.save_project_team = {


      project_id : this.the_project_id,
      project_manager : this.exampleinput,
      business_analyst : this.exampleinput2,
      product_owner : this.  exampleinput3,
      qa : this.exampleinput4,
      test_environment : this.exampleinput5
      
    }

    console.log(this.save_project_team)

   //this.service.sendTeamToDB(this.exampleinput)

    this.service.sendTeamToDB(this.save_project_team)
    this.service.fetching();

  }



  

  ngOnInit() {
      const m = this.index;  
    if(this.service.completedProjectsAddTeams[m]['team']){
      this.exampleinput = this.service.completedProjectsAddTeams[m]['team'].team.project_manager
      this.exampleinput2 = this.service.completedProjectsAddTeams[m]['team'].team.product_owner
      this.exampleinput3 = this.service.completedProjectsAddTeams[m]['team'].team.business_analyst
      this.exampleinput4 = this.service.completedProjectsAddTeams[m]['team'].team.qa
      this.exampleinput5 = this.service.completedProjectsAddTeams[m]['team'].team.test_environment
      this.exampleproject_id = this.service.completedProjectsAddTeams[m].project_id
    }


      this.updated_project_owner = this.exampleinput


   

    this.user = {

      name : this.member,
      status : this.hide_name,
    }
    this.members = [];
    this.hide_name =  true;
    this.show_name = true;
    this.delete_team_array = this.service.all_project_teams
    this.indexID = this.idFromIndex();



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

  createId(value: string, prefix?: string){
    let retVal = '#';
    retVal += prefix ? prefix + value : value;
    return retVal;
  }

 

  addMember(event, project){

    //this.getProjectDetails(event, this.index)
    console.log(event)
    console.log(project)
    this.service.get_project_id = project;
    this.add_member_project_id = project
    this.service.add_member_project_id = this.add_member_project_id 
    console.log(this.index)
    

    this.members.push(new TeamMemberModel);
    //console.log(this.project_team)

  }

  getProjectDetails(event, project){

    console.log(project)
    this.service.team = []
   this.service.project_id = []

    this.project = project
    this.service.individual_project_id = project;



  }


  getProjectDetails2(event, project){

    this.the_project_id = project

   
    this.service.team = []
    this.service.project_id = []


    this.service.getProjectTeam2(project)
  }


  getProjectDetails3(event, project){

    console.log(project)
    this.the_project_id = project

   
    this.service.team = []
    this.service.project_id = []

 
    this.service.getProjectTeam2(project)
  }




  addTeamToProject(project){

    

    console.log(this.service.add_member_project_id) 
    console.log(this.service.team)
    console.log(this.project)
    this.projectTeamArray = []

  

      let the_team = {

       project :  this.service.project_id_service,

       team:  this.service.team

      }

    console.log(the_team)
    

      this.the_team = the_team
      this.service.the_team = the_team
      this.service.the_team_id = this.the_team.project_id
      console.log(this.service.the_team_id)
      console.log(this.the_team)
      console.log(this.service.the_team)

  }


  updateProjectTeam(){

    
  }





  save(the_team){


    console.log(this.the_team)
    this.addTeamToProject('');
    this.service.saveRoles(this.the_team, this.service.project_id_service)
    //this.service.fetching();


  }


     
      
      }

