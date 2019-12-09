import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Team } from './team.model';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from './user.model';
import { Project } from './project.model';
import { TeamMemberModel } from './team-member.model';
import { ProjectRoleModel } from './project-role.model';
import { verifyHostBindings } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  // To run server locally, uncomment below.
  //uri = "http://localhost:5000"

 // To run the cloud (hosted) version of the server, uncomment below if commented out.
  uri = "https://rmaserver.herokuapp.com"

  endpoint = "";
  data_received: any;
  data_sent: any;
  serviceData: any;
  teamlist: Array<Team>;
  time: any;
  get_user: any;
  new_user_message: any;
  cred_already_exist: boolean = false;
  check_email: any;
  flag: boolean;
  initial_message: any;
  priviledge: boolean = false;
  userRole: any;
  return_users: Array<TeamMemberModel>;
  return_user_model: Array<UserModel>;
  manage_user_by_name: Array<TeamMemberModel>
  all_projects: Array<Project>
  every_single_project: Array<Project>;
  user_firstname: any;
  user_lastname: any;
  get_all_users: any;
  get_all_users_to_update_profile: any;
  projectRoles: Array<ProjectRoleModel>
  set_user_name: any;
  roles: any;
  project_team: any;
  project: any;
  check: boolean = false;
  return_user_id: any;
  project_id_created_by_user: any;
  created_user_id: any;
  array_of_projects: any;
  show_spinner: boolean = false;
  return_project_team: Array<UserModel>;
  get_user_email: any;
  user_password: any;
  user_role: any;
  set_user_lastname: any;
  user_id: any;
  user_innotas_id: any;
  updated_firstname: any;
  updated_lastname: any;
  updated_email: any;
  user_profile: UserModel;

  projectsAddTeams: Array<any> = [];
  completedProjectsAddTeams: Array<any> = [];



  edit_manage_firstName: string;
  edit_manage_lastName: string;
  edit_manage_password: string;
  edit_manage_role: string;
  edit_manage_email: string;
  edit_manage_id: string;
  edit_manage_innotas_id: string;
  get_user_id: string;
  serviceData_india: any;
  index: number;
  block_id: string;

  alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".toUpperCase().split(' ');
  alphabet_update = "".toUpperCase().split(' ')
  temp: any;
  alphabetized: Object;
  Project_Manager_ID: any;
  project_block_index: any;
  project_block: any;
  go_Live_Date: any;
  groject_RYG_Color: any;
  last_Updated: any;
  project_Manager: any;
  project_Manager_ID: any;
  project_Start_Date: any;
  project_Status: any;
  project_Title: any;
  project_Work_Type: any;
  return_user_innotas_id: any;
  project_count: any;
  every_project: any;
  completed_projects: Array<Project>;
  completed_projects_count: number
  active_projects: Array<Project>;
  active_projects_count: number;
  test_date: any;
  test_name: any;
  project_live_date: any;
  project_name_date: any;
  project_go_live_array = [];
  show_flag: Boolean = false;
  user_credentials: any;
  cred: Boolean = undefined;
  user_login: any = { password2: undefined, email2: undefined };
  user_obj: any;
  team = []
  project_index: any;
  the_team: Object
  the_team_id: any;
  team_member = []
  project_id = []
  individual_project_id: any;
  the_project = []
  get_project_id: any;
  team_response: any;
  all_project_teams: any;
  the_project_team_project_id: any;
  list_of_projects: any[] = [];
  add_member_project_id: any;
  db_team_proj: any;
  adding_team_to_project_array = []
  all_team_projects: any;
  all_your_projects: [];
  your_project_id: any;
  db_project_team: any;
  exampleinput: any;
  exampleinput2: any;
  exampleinput3: any;
  exampleinput4: any;
  exampleinput5: any;
  exampleproject_id: any;
  project_db_active : Project
  the_project_team: any;

  final_team_array = []

  new_project_team_array = []
  all_project_teams_again = []

  project_id_service: any;

  public jwtHelper = new JwtHelperService();

  constructor(private https: HttpClient, private router: Router) {

    this.teamlist = new Array<Team>();
    this.return_users = [];
    this.roles = [];
    this.created_user_id = [];
    this.alphabetized = {};
    this.array_of_projects = new Array();
    console.error("init", this.return_users);
    this.return_project_team = [];
    this.manage_user_by_name = []
    this.all_projects = [];
    this.every_single_project = []
    this.completed_projects = [];
    this.active_projects = [];
    this.project_go_live_array;
    this.team = []
    this.team_member = []
    this.project_id = []
    this.the_project = []
    this.list_of_projects = []
    this.adding_team_to_project_array = []
    this.all_your_projects = [];
    this.new_project_team_array = []
    this.all_project_teams_again = []


    this.final_team_array = [];

    this.getProjects.bind(this);
    this.fetching.bind(this);
  }




  getProjectTeam2(project) {

    this.project_id_service = project
    this.https.post(this.uri + '/getprojectteam2', { project })
      .subscribe((response: any) => {

        this.the_project_team = response.project_team

      }

      )
  }

  getUsers() {
    this.https.get(this.uri + '/return_users')
      .subscribe((response: any) => {

        this.user_credentials = response.result;
      })
  }




  checkPassword() {
    for (var key in this.user_credentials) {
      var obj = this.user_credentials[key];


      this.user_obj = {

        email: obj.user._email,
        password: obj.user._password
      }


      if (this.user_login.email2 === this.user_obj.email && this.user_login.password2 === this.user_obj.password) {

        this.cred = true;
        return;

      }
    }
    this.cred = false;
  }

  login(user: UserModel) {

    const observable = this.https.post(this.uri + '/authenticate', { user })
    observable.subscribe((response: any) => {


      localStorage.setItem('auth_token', response.token);
      localStorage.setItem('user', response.return_name);
      this.get_user = localStorage.getItem('user');
      this.check_email = response.return_email;
      this.set_user_name = localStorage.setItem('username', response.return_user_first_name);
      this.get_user = localStorage.getItem('username')
      this.userRole = response.return_user_role;
      this.check = true;
      this.return_user_id = response.return_user_id;
      this.user_password = response.return_password;
      this.user_role = response.get_user_role;
      this.set_user_name = response.return_user_first_name;
      this.set_user_lastname = response.return_user_lastname;
      this.get_user_email = response.return_email
      this.user_id = response.return_user_id;
      this.user_innotas_id = response.return_user_innotas_id;




      this.user_login = {

        email2: this.get_user_email,
        password2: this.user_password
      }

      this.checkPassword();


      console.log("is Auth is: " + this.isAuthenticated())

    })

    return observable;

  }

  subscribe(user: UserModel) {


    this.https.post(this.uri + '/subscribe', { user })
      .subscribe((response: any) => {


        console.log('User subscribed successfully!')


        this.cred_already_exist = response.cred_error;
        response.initial_message = "";
        this.initial_message = response.initial_message
        this.new_user_message = this.initial_message
      })

    this.fetching();

  }


  updateProfile(firstname, lastname, email, password, id) {

    console.error(this.uri)
    this.https.post(this.uri + '/profile', { firstname, lastname, email, password, id })
      .subscribe((response: any) => {

        this.updated_firstname = response.updated_firstname;
        this.updated_lastname = response.updated_lastname;
        this.updated_email = response.updated_email;

        this.user_profile = new UserModel(this.updated_firstname, this.updated_lastname, this.updated_email)
        console.log('USSER PROFILE IN SERVICE: ' + this.user_profile._firstName)

      })

  }

  updateUserProfile(firstname, lastname, email, password, id, role, innotas_id) {

    this.https.post(this.uri + '/profileuserprofile', { firstname, lastname, email, password, id, role, innotas_id })
      .subscribe((response: any) => {

        this.updated_firstname = response.edited_updated_firstname;
        this.updated_lastname = response.edited_updated_lastname;
        this.updated_email = response.edited_updated_email;

        this.user_profile = new UserModel(this.updated_firstname, this.updated_lastname, this.updated_email)

      })

  }




  deleteUserProfile(id) {

    this.https.post(this.uri + '/deleteuserprofile', { id })
      .subscribe((response: any) => {

        console.log("user deleted")


      })

  }



  fromCompletedProjects(test: Project) {

    console.log(test)
    this.https.post(this.uri + '/test', { test })
      .subscribe((response: any) => {

       // this.data_sent = response.message_user
        //console.log(this.data_sent)

      })
  }


  fetching() {

    const projectsObservable = this.getProjects();


    projectsObservable.subscribe((res) => {
      const observable = this.https.get(this.uri + '/yourprojects')
      observable.subscribe((response: any) => {
        this.user_firstname = response.get_user_name

        this.user_lastname = response.get_user_password;
        this.get_all_users = response.get_all_users
        this.get_all_users_to_update_profile = response.get_all_users
        this.return_user_innotas_id = response.get_user_innotas_id;
        this.project_count = response.number_of_projects

        this.return_users = []
        this.manage_user_by_name = []

        this.get_all_users.forEach(user => {

          const teamModel = new TeamMemberModel(user.user._firstName, user.user._lastName, user._id, user.user._password, user.user._email, user.user._role, user.user._innotas_id);
          this.return_users.push(teamModel);
          this.return_users.sort((a, b) => a._firstName.localeCompare(b._lastName));
          this.edit_manage_id = user._id

        })

        //Sort through array to get first initial (for manage users page)
        for (let z = 0; z < this.alphabet.length; z++) {


          this.block_id = this.alphabet[z].toString();
          this.index = this.alphabet.indexOf(this.block_id)

          this.alphabetized[this.block_id] = [];

          //Get first letter of name that exists (for manage users page)
          this.return_users.forEach((user: TeamMemberModel) => {
            if (user._lastName[0].toUpperCase() === this.block_id) {

              this.alphabetized[this.block_id].push(user);

            }
          });

          const forDeletion = [];

          for (var key in this.alphabetized) {
            if (this.alphabetized.hasOwnProperty(key)) {

              // if user (user initials do not exist) - do not create a block
              if (this.alphabetized[key].length == 0) {

                this.temp = key;

                forDeletion.push(this.temp);

              }

            }

          }

          this.alphabet_update = this.alphabet.filter(item => !forDeletion.includes(item))

        }

      })

      return observable;
    })

    return projectsObservable;
  }

  //Get the user projects from the DB.
  getProjects() {


    const observable = this.https.get(this.uri + '/getprojects')
    observable.subscribe((response: any) => {

      this.created_user_id = response.result;
      this.every_project = response.result
      this.Project_Manager_ID = response.result.project_Manager_ID
      this.getProjectTeam();
      let array_of_projects = [];

      for (let v = 0; v < this.created_user_id.length; v++) {

        var id_in = this.created_user_id[v].project_Manager_ID

        //your projects

        if (this.user_innotas_id == id_in) {

          this.created_user_id[v]
          if (this.created_user_id[v].project_Status != 'Canceled') {

            array_of_projects.push(this.created_user_id[v]);
            this.array_of_projects = array_of_projects
            this.project_go_live_array.push(this.created_user_id[v].go_Live_Date)

    

          }


        }


      }

      //The code below is processing the projects and appending the Project model. This is also where
      // the projects get broken down by Innotas ID, completed status and active status.


      //Get innotas projects from DB to add to Project model
      for (let g = 0; g < this.array_of_projects.length; g++) {

        //get ID from your projects
        let all_projects_id = this.array_of_projects[g]._id
        let all_projects = this.array_of_projects[g]
        
        this.all_team_projects = all_projects_id

      }
      //Add all projects IDs to list_of_projects
      this.list_of_projects.push(this.all_team_projects)

      this.array_of_projects = array_of_projects;

      let all_projects = [];


      this.array_of_projects.forEach(project => {

        const project_db = new Project(project.go_Live_Date, project.groject_RYG_Color, project.last_Updated, project.project_Manager, project.project_Manager_ID, project.project_Start_Date, project.project_Status, project.project_Title, project.project_Work_Type, project._id);
        this.show_flag = true;
        all_projects.push(project_db)

      });
      this.all_projects = all_projects;


      for (let c = 0; c < this.all_projects.length; c++) {

        let project_block = all_projects[c];
        this.project_block = project_block
        this.project_count = this.all_projects.length;

        if (this.project_count.length == 0) {
          this.show_flag = true;

        }

        let project_block_index = all_projects.indexOf(this.project_block)

        this.project_block_index = project_block_index;


        this.Project_Manager_ID = all_projects[c]._project_Manager_ID
        this.go_Live_Date = all_projects[c]._go_live_date
        this.groject_RYG_Color = all_projects[c]._groject_RYG_Color
        this.last_Updated = all_projects[c]._last_Updated
        this.project_Manager = all_projects[c]._project_Manager
        this.project_Start_Date = all_projects[c]._project_Start_Date
        this.project_Status = all_projects[c]._project_Status
        this.project_Title = all_projects[c]._project_Title
        this.project_Work_Type = all_projects[c]._project_Work_Typ


      }


      let every_completed_project = [];

      let completed_projects = [];
      let active_projects = []

      this.every_single_project = [];
      for (let q = 0; q < this.every_project.length; q++) {


        this.every_single_project.push(this.every_project[q]);
        every_completed_project.push(this.every_project[q]);


      }

      //Filter for active projects.
      this.filterActiveProjects(active_projects);


      //Get project teams from DB 
      this.https.get(this.uri + '/getprojecteam')
        .subscribe((response: any) => {


          this.db_project_team = response.result
          this.completedProjectsAddTeams = [];

          every_completed_project.forEach(project => {

            const project_db_active = new Project(project.go_Live_Date, project.groject_RYG_Color, project.last_Updated, project.project_Manager, project.project_Manager_ID, project.project_Start_Date, project.project_Status, project.project_Title, project.project_Work_Type, project._id);
            this.project_db_active = project_db_active
            const project_db_completed = new Project(project.go_Live_Date, project.groject_RYG_Color, project.last_Updated, project.project_Manager, project.project_Manager_ID, project.project_Start_Date, project.project_Status, project.project_Title, project.project_Work_Type, project._id);

            this.project_live_date = project.go_Live_Date;
            this.project_name_date = project.project_Title

            //Filter for completed projects.

            this.filterCompleteProjects(project, completed_projects, project_db_completed);

          });




          this.getTheProjectTeam();

        })
    }
    )
    return observable;

  }

  private filterCompleteProjects(project: any, completed_projects: any[], project_db_completed: Project) {
    if (project.project_Status == 'Completed') {
      this.show_flag = true;
      completed_projects.push(project_db_completed);
      this.completed_projects = completed_projects;
      this.completed_projects_count = this.completed_projects.length;
      this.addTeamToProjects(project);
    }
  }


  private filterActiveProjects(active_projects: any[]) {

    this.every_project.forEach(project => {
      if (project.project_Status == 'Open' || project.project_Status == 'Hold') {
        this.show_flag = true;
        active_projects.push(project);
        this.active_projects = active_projects;

        this.active_projects_count = this.active_projects.length;
      }
    });
  }

  addTeamToProjects(project) {

    project['team'] = undefined;
    for (let h = 0; h < this.db_project_team.length; h++) {
      if (this.db_project_team[h]['team']['project_id'] === project['_id']) {
        project['team'] = this.db_project_team[h];
      }
    }
    this.completedProjectsAddTeams.push(project);

  }


  passwordReset(email) {


    console.log('Sending email: ' + email)

    this.https.post(this.uri + '/password_reset', { email })

      .subscribe((response: any) => {

        this.data_sent = response.message_user
      }

      )
  };

  releaseDates() {

    this.test_name = this.project_name_date
    this.test_date = new Date(this.project_live_date);

  }




  saveRoles1(team, thing) {



    console.error(this.uri)
    this.https.post(this.uri + '/projects', { team })
      .subscribe((response: any) => {

        console.log("posted")





      })


  }


  sendTeamToDB(team) {


    this.https.post(this.uri + '/addprojectteam', { team })
      .subscribe((response: any) => {

        console.log("posted")





      })
  }


  getTheProjectTeam() {


    this.https.get(this.uri + '/getprojecteam')
      .subscribe((response: any) => {


        this.db_project_team = response.result

        let projectsAddTeams = []
        this.array_of_projects.forEach((project) => {
          project['team'] = undefined;
          for (let h = 0; h < this.db_project_team.length; h++) {
            if (this.db_project_team[h]['team']['project_id'] === project['_id']) {
              project['team'] = this.db_project_team[h];
            }
          }
          projectsAddTeams.push(project)
          this.projectsAddTeams = projectsAddTeams
        })

      })
  }


  saveRoles(team, project_id) {

    console.log(team)
    console.log(project_id)

    console.error(this.uri)
    this.https.post(this.uri + '/projects', { team, project_id })
      .subscribe((response: any) => {

        console.log("posted")





      })


  }

  updateProjectTeam(team, id) {

    console.log(team)

    console.error(this.uri)
    this.https.post(this.uri + '/updateprojectteam', { team, id })
      .subscribe((response: any) => {

        console.log("posted")

        console.log(this.all_project_teams)




      })


  }





  getProjectTeam() {

    let new_project_team_array = []
    this.https.get(this.uri + '/getprojectteam')
      .subscribe((response: any) => {


        this.project_team = response.project_team
        this.all_project_teams = response.all_project_teams


        new_project_team_array.push(this.all_project_teams)

        this.new_project_team_array = new_project_team_array


        for (let k = 0; k < this.all_project_teams.length; k++) {

          this.your_project_id = this.all_project_teams[k].team.project;
        }


      }


      )
  }




  apiCall(year) {



    let the_year = year
    this.serviceData = this.https.get(`https://calendarific.com/api/v2/holidays?api_key=d65691e92c9d3bbad833289369b3e6b8775ffee3&country=US&year=${the_year}`);

    return this.serviceData;


  }


  apiCallIndian(year) {



    let the_year = year
    this.serviceData_india = this.https.get(`https://calendarific.com/api/v2/holidays?api_key=38fa84b459ed09740077aa5911ad3a762f195b50&country=IN&year=${the_year}`);

    return this.serviceData_india;


  }




  getArrayCount() {

    return this.teamlist.length
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.flag = false;
    this.cred = undefined;
    this.user_login = { password2: undefined, email2: undefined };
    this.router.navigateByUrl("/login")
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('auth_token');
    if (this.jwtHelper.isTokenExpired(token)) {

      this.flag = false;

    } else {

      this.flag = true;
      this.priviledge = true;
      this.router.navigateByUrl("/master-calendar")
    }
    return !this.jwtHelper.isTokenExpired(token);
  }

  isAuthorized(allowedRoles: string[]): boolean {

    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    // get token from local storage or state management
    const token = localStorage.getItem('auth_token');

    // decode token to read the payload details
    const decodeToken = this.jwtHelper.decodeToken(token);
    // check if it was decoded successfully, if not the token is not valid, deny access
    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return allowedRoles.includes(decodeToken['role']);
  }



}
