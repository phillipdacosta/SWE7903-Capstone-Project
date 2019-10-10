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


  // uri = "http://localhost:5000"

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
  updated_firstname: any;
  updated_lastname: any;
  updated_email: any;
  user_profile: UserModel;
  all_users: any;

  edit_manage_firstName: string;
  edit_manage_lastName: string;
  edit_manage_password: string;
  edit_manage_role: string;
  edit_manage_email: string;
  edit_manage_id: string;
  get_user_id: string;
  serviceData_india: any;
  index: number;
  block_id: string;

  alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".toUpperCase().split(' ');
  alphabet_update = "".toUpperCase().split(' ')
  temp: any;
  alphabetized: Object;



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




  }

  login(user: UserModel) {


    console.log(user)
    this.https.post(this.uri + '/authenticate', { user })
      .subscribe((response: any) => {


        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user', response.return_name);
        this.get_user = localStorage.getItem('user');
        this.check_email = response.return_email;
        this.set_user_name = localStorage.setItem('username', response.return_user_first_name);
        console.log(this.set_user_name)
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
        console.log(this.user_id)
        console.log(this.get_user_email)
        console.log(this.set_user_lastname)

        console.log(this.set_user_name)

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

  updateUserProfile(firstname, lastname, email, password, id, role) {

    console.log(role)

    console.error(this.uri)
    this.https.post(this.uri + '/profileuserprofile', { firstname, lastname, email, password, id, role })
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
    console.log("first")
    this.https.post(this.uri + '/test', { test })
      .subscribe((response: any) => {
        console.log("second")

        this.data_sent = response.message_user
        console.log(this.data_sent)

      })
  }


  fetching() {

    this.getProjects();
    console.log(this.show_spinner)
    // console.log('code ran')
    this.https.get(this.uri + '/yourprojects')
      .subscribe((response: any) => {
        console.log("third")
        this.user_firstname = response.get_user_name
        console.log(this.user_firstname)
        console.log('From fetching:' + this.user_firstname)
        this.user_lastname = response.get_user_password;
        this.get_all_users = response.get_all_users
        this.get_all_users_to_update_profile = response.get_all_users

        console.log(this.get_all_users)
        // console.log(this.get_all_users_to_update_profile)
        console.log(this.return_users)

        this.return_users = []
        this.manage_user_by_name = []

        this.get_all_users.forEach(user => {

          const teamModel = new TeamMemberModel(user.user._firstName, user.user._lastName, user._id, user.user._password, user.user._email, user.user._role);
          this.return_users.push(teamModel);
          this.return_users.sort((a, b) => a._firstName.localeCompare(b._lastName));
          this.edit_manage_id = user._id

        })


        for (let z = 0; z < this.alphabet.length; z++) {

          console.log(this.alphabet)
          this.block_id = this.alphabet[z].toString();
          this.index = this.alphabet.indexOf(this.block_id)

          this.alphabetized[this.block_id] = [];
          console.log(this.alphabetized[this.block_id])

          console.log(this.return_users)

          this.return_users.forEach((user: TeamMemberModel) => {
            if (user._lastName[0].toUpperCase() === this.block_id) {

              console.log(this.return_users)
              console.log(user)


              this.alphabetized[this.block_id].push(user);

              console.log(this.alphabetized)


            }
          });

          for (var key in this.alphabetized) {
            if (this.alphabetized.hasOwnProperty(key)) {

              if (this.alphabetized[key].length == 0) {

                this.temp = key;

                let forDeletion = [this.temp]

                this.alphabet = this.alphabet.filter(item => !forDeletion.includes(item))

                this.alphabet_update = this.alphabet;
                console.log(this.alphabet)
              }

            }

          }

       





          // console.log(this.block_id)
          // console.log(this.alphabetized)
        }

        // console.log(this.manage_user_by_name)




      })



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


    this.https.get(this.uri + '/getprojects')
      .subscribe((response: any) => {

        this.created_user_id = response.result
        console.log(this.created_user_id)

        let v;
        let array_of_projects = [];

        for (v = 0; v < this.created_user_id.length; v++) {

          if (this.created_user_id[v].created_by_user == this.return_user_id) {

            array_of_projects.push(this.created_user_id[v]);
            console.log(this.created_user_id[v]);



            console.log(array_of_projects)
            this.show_spinner = false;
          }

        }
        this.array_of_projects = array_of_projects;

        this.array_of_projects_role = array_of_projects[0].projectteam[0]._firstName;
        console.log('ARRAY OF PROJECTS ' + JSON.stringify(this.array_of_projects))

        this.array_of_projects_firstname = array_of_projects[0].projectteam[0].projectRole;

        console.log(this.array_of_projects_role)


        console.log(this.array_of_projects.length)

        this.array_of_projects.forEach(team => {
          // const teamModel = new TeamMemberModel(team.projectteam[0]._firstName);
          //    this.return_project_team.push(teamModel);
          //  console.log("PROJECT TEAM" + this.return_project_team[0].firstName)
        });


      })



  }


  saveRoles(projectteam, created_by_user) {

    this.return_user_id = created_by_user

    console.error(this.uri)
    this.https.post(this.uri + '/projects', { projectteam, created_by_user })
      .subscribe((response: any) => {

        this.project_team = response.project_team


        console.log(this.project_team)
      })


  }


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
