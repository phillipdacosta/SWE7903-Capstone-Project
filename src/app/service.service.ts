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


  //uri = "http://localhost:5000"

  uri = "https://pacific-thicket-17424.herokuapp.com"

  endpoint = "";
  data_received: any;
  data_sent: any;
  serviceData: any;
  teamlist: Array<Team>;
  project_manager: any;
  business_analyst: any;
  QA: any;
  product_owner: any;
  counter: any;
  time: any;
  user_logged_in: any;
  user: any;
  get_user: any;
  get_user_message: any;
  new_user_message: any;
  occupation: any;
  array: any;
  try_message: any;
  cred_already_exist: boolean = false;
  sending_user_message: any;
  check_email: any;
  check_password: any;
  flag: boolean;
  initial_message: any;
  priviledge: boolean = false;
  userRole: any;
  return_users: Array<TeamMemberModel>;
  return_user_model: Array<UserModel>;
  manage_user_by_name: Array<TeamMemberModel>
  display_user_array: Array<UserModel>;
  all_projects: Array<Project>
  every_single_project: Array<Project>;
  user_firstname: any;
  user_lastname: any;
  user_email: any;
  get_all_users: any;
  get_all_users_to_update_profile: any;
  users: Array<TeamMemberModel>;
  projectRoles: Array<ProjectRoleModel>
  set_user_name: any;
  roles: any;
  project_team: any;
  project: any;
  check: boolean = false;
  return_user_id: any;
  project_id_created_by_user: any;
  created_user_id: any;
  number_of_projects: any;
  array_of_projects: any;
  array_of_projects_role: any;
  show_spinner: boolean = false;
  array_of_projects_firstname: any;
  user_team: Array<UserModel>;
  return_project_team: Array<UserModel>;
  get_user_email: any;
  user_password: any;
  user_role: any;
  set_user_lastname: any;
  set_user_firstname: any;
  user_id: any;
  user_innotas_id: any;
  updated_firstname: any;
  updated_lastname: any;
  updated_email: any;
  user_profile: UserModel;
  all_users: any;
  email: any;



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
  project_status_every_project: any;
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
  user_credentials_email: any;
  user_credentials_password: any;
  user_credentials: any;
  cred: Boolean = false;
  user_login: any;
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
  team_response : any;
  all_project_teams : any;
  new_array = []
  the_project_team_project_id : any;
  list_of_projects : any[] = [];
  add_member_project_id: any;
  db_team_proj : any;
  adding_team_to_project_array = []
  all_team_projects : any;
  all_your_projects : [];
  your_project_id : any;
  singular_project : any;
  test_array : any[] = [];



  new_project_team_array = []
  final_all_your_projects = []
  all_project_teams_again = []

  public jwtHelper = new JwtHelperService();

  constructor(private https: HttpClient, private router: Router) {

    this.teamlist = new Array<Team>();
    this.return_users = [];
    this.roles = [];
    this.created_user_id = [];
    this.alphabetized = {};
    this.number_of_projects = new Array();
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
    this.new_array = []
    this.list_of_projects = []
    this.adding_team_to_project_array = []
    this.all_your_projects = [];
    this.test_array = []
    this.new_project_team_array = []
    this.final_all_your_projects = []
    this.all_project_teams_again = []
  }


  checkPassword() {


    this.https.get(this.uri + '/return_users')
      .subscribe((response: any) => {

        //this.user_credentials_email = response.user_credentials_email
        this.user_credentials = response.result;
        console.log(this.user_credentials)



        for (var key in this.user_credentials) {
          var obj = this.user_credentials[key];


          this.user_obj = {

            email: obj.user._email,
            password: obj.user._password
          }


        }

        if (this.user_login != this.user_obj) {


          this.cred = true;
        }








      })
  }

  login(user: UserModel) {

    if (this.checkPassword)
      console.log(user)
    this.https.post(this.uri + '/authenticate', { user })
      .subscribe((response: any) => {


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
        console.log(this.user_innotas_id)

        console.log(this.get_user_email)
        console.log(this.user_password)



        this.user_login = {

          email2: this.get_user_email,
          password2: this.user_password
        }



        /*
        
               email: get_user_email,
                    password: get_user_password,
                    role: get_user_role,
                    return_user_lastname: return_user_last_name,
        */
        //  this.router.navigate(['master-calendar']);
        console.log("is Auth is: " + this.isAuthenticated())

      })

  }

  subscribe(user: UserModel) {

    console.log(user)
    console.error(this.uri)
    this.https.post(this.uri + '/subscribe', { user })
      .subscribe((response: any) => {


        console.log('User subscribed successfully!')
        // localStorage.setItem('auth_token', response.token);

        console.log('cred_exists is + ' + this.cred_already_exist)
        this.cred_already_exist = response.cred_error;
        console.log('cred_exists is + ' + this.cred_already_exist)
        response.initial_message = "";
        this.initial_message = response.initial_message
        this.new_user_message = this.initial_message
        console.log('User initial message is: ' + this.initial_message)
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

    console.log('*****' + innotas_id)

    console.log(role)

    console.error(this.uri)
    this.https.post(this.uri + '/profileuserprofile', { firstname, lastname, email, password, id, role, innotas_id })
      .subscribe((response: any) => {

        this.updated_firstname = response.edited_updated_firstname;
        this.updated_lastname = response.edited_updated_lastname;
        this.updated_email = response.edited_updated_email;

        this.user_profile = new UserModel(this.updated_firstname, this.updated_lastname, this.updated_email)
        console.log('USSER PROFILE IN SERVICE: ' + this.user_profile._firstName)

      })

  }

  deleteUserProfile(id) {

    console.error(this.uri)
    this.https.post(this.uri + '/deleteuserprofile', { id })
      .subscribe((response: any) => {

        console.log("user deleted")


      })

  }



  fromCompletedProjects(test: Project) {

    console.log(test)
    this.https.post(this.uri + '/test', { test })
      .subscribe((response: any) => {

        this.data_sent = response.message_user
        console.log(this.data_sent)

      })
  }


  fetching() {

    // this.show_spinner = true;

    this.getProjects();
    // console.log(this.show_spinner)
    // console.log('code ran')
    this.https.get(this.uri + '/yourprojects')
      .subscribe((response: any) => {
        // console.log("third")
        this.user_firstname = response.get_user_name
        // console.log(this.user_firstname)

        this.user_lastname = response.get_user_password;
        this.get_all_users = response.get_all_users
        this.get_all_users_to_update_profile = response.get_all_users
        this.return_user_innotas_id = response.get_user_innotas_id;
        this.project_count = response.number_of_projects
        console.log(this.return_user_id)



        //console.log(this.get_all_users)
        // console.log(this.get_all_users_to_update_profile)
        //console.log(this.return_users)

        this.return_users = []
        this.manage_user_by_name = []

        this.get_all_users.forEach(user => {

          const teamModel = new TeamMemberModel(user.user._firstName, user.user._lastName, user._id, user.user._password, user.user._email, user.user._role, user.user._innotas_id);
          this.return_users.push(teamModel);
          this.return_users.sort((a, b) => a._firstName.localeCompare(b._lastName));
          this.edit_manage_id = user._id

        })

        for (let z = 0; z < this.alphabet.length; z++) {

          // console.log(this.alphabet)
          //  this.project_count = this.alphabet.length;
          this.block_id = this.alphabet[z].toString();
          this.index = this.alphabet.indexOf(this.block_id)

          this.alphabetized[this.block_id] = [];


          this.return_users.forEach((user: TeamMemberModel) => {
            if (user._lastName[0].toUpperCase() === this.block_id) {




              this.alphabetized[this.block_id].push(user);
              //console.log(this.alphabetized)



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





          // console.log(this.block_id)
          // console.log(this.alphabetized)
        }

        // console.log(this.manage_user_by_name)




      })


    //this.show_spinner = false;

  }

  fetchRoles() {

    this.https.get(this.uri + '/roles')
      .subscribe((response: any) => {

        this.roles = response.result
        // console.error("roles:", this.roles);
      })

    //change below
    //  this.get_all_users =  new TeamMemberModel(response.get_user_name, response.get_user_password, "id20")


  }



  getProjects() {

    // this.show_spinner = true;

    this.https.get(this.uri + '/getprojects')
      .subscribe((response: any) => {

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
            
                //all your projects
             //   console.log(this.array_of_projects)
             
            }

        
          }
     

        }

        for(let g = 0 ; g < this.array_of_projects.length; g++){

          //get ID from your projects
          let all_projects_id = this.array_of_projects[g]._id
          let all_projects =  this.array_of_projects[g]
        
          this.all_team_projects = all_projects_id
         
          console.log(all_projects_id)
          console.log(all_projects)

        }
       
        //add those IDs to list of projects
        this.list_of_projects.push(this.all_team_projects) 
        console.log(this.list_of_projects)


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


        //  console.log(all_projects)

        let every_completed_project = [];

        let completed_projects = [];
        let active_projects = []


        for (let q = 0; q < this.every_project.length; q++) {


          this.every_single_project.push(this.every_project[q]);
          every_completed_project.push(this.every_project[q]);


        }

        //  console.log(this.every_project)

        let time_arr = []

        this.every_project.forEach(project => {

          const project_db = new Project(project.go_live_date, project.groject_RYG_Color, project.last_Updated, project.project_Manager, project.project_Manager_ID, project.project_Start_Date, project.project_Status, project.project_Title, project.project_Work_Type, project.id);

          if (project.project_Status == 'Open' || project.project_Status == 'Hold') {


            this.show_flag = true;
            active_projects.push(project_db)
            this.active_projects = active_projects
            this.active_projects_count = this.active_projects.length
            // console.log(this.active_projects)

          }
        });
        /*
                     for(let u = 0; u < every_single_project.length ; u++){
        
        
                      this.project_live_date =  every_single_project[u].go_Live_Date;
                      time_arr.push(this.project_live_date)
                      this.project_go_live_array = time_arr;
        
                     }
                     */



        // console.log(this.project_go_live_array)


        every_completed_project.forEach(project => {

          const project_db_completed = new Project(project.go_Live_Date, project.groject_RYG_Color, project.last_Updated, project.project_Manager, project.project_Manager_ID, project.project_Start_Date, project.project_Status, project.project_Title, project.project_Work_Type, project._id);

          this.project_live_date = project.go_Live_Date;
          this.project_name_date = project.project_Title

          if (project.project_Status == 'Completed') {
            this.show_flag = true;
            completed_projects.push(project_db_completed)
            this.completed_projects = completed_projects


            this.completed_projects_count = this.completed_projects.length

          }
          this.addTeamToProjects()

        });
        //  console.log(this.every_project)

     


      })
    //  console.log(this.list_of_projects)
  }

  addTeamToProjects() {






    //take index and object. Find project. Add it to project.

    console.log("COUNTER: " + this.array_of_projects.length)

    for (let t = 0; t < this.array_of_projects.length; t++) {

      /*
      
      if index matches this.array_of_projects.indexOf(this.array_of_projects[t])
       then find the project.
      then add the object to the project.

     */

      //console.log(this.array_of_projects.indexOf(this.array_of_projects[t]))
    }
  }


  passwordReset(email) {


    console.log('Sending email: ' + email)

    this.https.post(this.uri + '/password_reset', { email })

      .subscribe((response: any) => {

        this.data_sent = response.message_user
        console.log(this.data_sent)
      }

      )
  };

  releaseDates() {

    this.test_name = this.project_name_date
    this.test_date = new Date(this.project_live_date);
    console.log(this.test_date)
    console.log(this.test_name)
  }

  /*
    saveRoles(projectteam, created_by_user) {
  
      this.return_user_id = created_by_user
  
      console.error(this.uri)
      this.https.post(this.uri + '/projects', { projectteam, created_by_user })
        .subscribe((response: any) => {
  
          this.project_team = response.project_team
  
  
        })
  
  
    }
  
  */

//need to check this code..

 saveRoles1(team, thing) {


  /*
   for (var key in team) {

     var obj = team[key];
     console.log(key)
     console.log(obj)

  
     console.log(team.team)
     console.log(team.team[key])
     console.log(team.team['project'])

     let new_array = [];
     for (var object in team.team) {

       var the_object = team.team[object]
       var the_team = team.team[object].name

       console.log(the_object)
       console.log(the_team)
       the_object = the_object.project;
       console.log(the_object)



       new_array.push(the_team)

       var projectTeam = {

         id_project: the_object,
         team: new_array
       }


       console.log(new_array)
     }




     //  console.log(obj['project'])
     //console.log(obj.includes(item));


     console.log(projectTeam)
     console.log(this.new_array)



   }

   */

   console.error(this.uri)
   this.https.post(this.uri + '/projects', { team })
     .subscribe((response: any) => {

      console.log("posted")


       
     

     })


 }


  saveRoles(team) {
   /*
    for (var key in team) {

      var obj = team[key];
      console.log(key)
      console.log(obj)

   
      console.log(team.team)
      console.log(team.team[key])
      console.log(team.team['project'])

      let new_array = [];
      for (var object in team.team) {

        var the_object = team.team[object]
        var the_team = team.team[object].name

        console.log(the_object)
        console.log(the_team)
        the_object = the_object.project;
        console.log(the_object)



        new_array.push(the_team)

        var projectTeam = {

          id_project: the_object,
          team: new_array
        }


        console.log(new_array)
      }




      //  console.log(obj['project'])
      //console.log(obj.includes(item));


      console.log(projectTeam)
      console.log(this.new_array)



    }

    */

    console.error(this.uri)
    this.https.post(this.uri + '/projects', { team })
      .subscribe((response: any) => {

       console.log("posted")


        
      

      })


  }


  

  getProjectTeam(){

    let new_project_team_array = []
    this.https.get(this.uri + '/getprojectteam')
      .subscribe((response: any) => {

       // console.log(this.all_your_projects)
       // let adding_team_to_project_array = []
        this.project_team = response.project_team
        this.all_project_teams = response.all_project_teams

        
        
        let team_all_project = []
       
       // console.log(this.all_project_teams)

     

        new_project_team_array.push(this.all_project_teams)

   

        

        this.new_project_team_array = new_project_team_array

        console.log(this.new_project_team_array)
        this.all_project_teams = this.all_project_teams
        console.log(this.all_project_teams)
      
        let test_array = []
        test_array.push(this.array_of_projects)
        this.final_all_your_projects = test_array
        

        console.log(this.final_all_your_projects)
       // this.new_project_team_array.push(this.all_project_teams)
       this.all_project_teams_again.push(this.all_project_teams)
       console.log(this.all_project_teams_again)
      }
    

      )}
  

  apiCall(year) {



    let the_year = year
    this.serviceData = this.https.get(`https://calendarific.com/api/v2/holidays?api_key=d65691e92c9d3bbad833289369b3e6b8775ffee3&country=US&year=${the_year}`);

    console.log(this.serviceData)
    return this.serviceData;


  }


  apiCallIndian(year) {



    let the_year = year
    this.serviceData_india = this.https.get(`https://calendarific.com/api/v2/holidays?api_key=38fa84b459ed09740077aa5911ad3a762f195b50&country=IN&year=${the_year}`);

    console.log(this.serviceData_india)
    return this.serviceData_india;


  }




  getArrayCount() {

    return this.teamlist.length
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.flag = false;
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
    console.log('token expired? : ' + this.jwtHelper.isTokenExpired(token))
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
    console.log("decode token: " + JSON.stringify(decodeToken))
    // check if it was decoded successfully, if not the token is not valid, deny access
    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return allowedRoles.includes(decodeToken['role']);
  }



}
