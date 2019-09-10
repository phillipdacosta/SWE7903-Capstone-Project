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
  data_received : any;
  data_sent : any;
  serviceData : any;
  teamlist: Array<Team>;
  project_manager : any;
  business_analyst : any;
  QA : any;
  product_owner : any;
  counter : any;
  time : any;
  user_logged_in : any;
  user : any;
  get_user : any;
  get_user_message : any;
  new_user_message : any;
  occupation : any;
  array : any;
  try_message : any;
  cred_already_exist : boolean = false;
  sending_user_message : any;
  check_email : any;
  check_password : any;
  flag : boolean ;
  initial_message : any;
  priviledge : boolean = false;
  userRole : any;
  return_users : any;
  user_firstname : any;
  user_lastname : any;
  user_email : any;
  get_all_users : any;
  users: Array<TeamMemberModel>;
  projectRoles: Array<ProjectRoleModel>
  set_user_name: any;

  public jwtHelper = new JwtHelperService();

  constructor(private https: HttpClient, private router : Router) { 
    
    this.teamlist = new Array<Team>();

  }

  login(user: UserModel) {

  
    console.log(user)
    this.https.post(this.uri + '/authenticate', {user})
    .subscribe((response: any) => {


          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('user', response.return_name);
          this.get_user = localStorage.getItem('user');
          this.check_email = response.return_name;
          this.set_user_name = localStorage.setItem('username',response.return_user_first_name);
          this.get_user = localStorage.getItem('username')
        console.log(this.set_user_name)
          this.userRole = response.return_user_role;
          console.log(response.return_user_first_name)

          console.log(this.cred_already_exist)
        //  this.router.navigate(['master-calendar']);
         console.log("is Auth is: " + this.isAuthenticated())

      })
     
    }

    subscribe(user: UserModel) {

      console.log(user)
      console.error(this.uri)
      this.https.post(this.uri + '/subscribe', {user})
      .subscribe((response: any) => {
       
 
        console.log('User subscribed successfully!')
        localStorage.setItem('auth_token', response.token);

        console.log('cred_exists is + ' + this.cred_already_exist)
        this.cred_already_exist = response.cred_error;
        console.log('cred_exists is + ' + this.cred_already_exist)
        response.initial_message = "";
        this.initial_message = response.initial_message
        this.new_user_message = this.initial_message
        console.log('User initial message is: ' + this.initial_message)
        })
       
      }


  fromCompletedProjects(test : Project){

    console.log(test)
    console.log("first")
    this.https.post(this.uri + '/test', {test})
    .subscribe((response: any) => {
      console.log("second")

     this.data_sent = response.message_user
     console.log(this.data_sent)

      })
  }


  fetching(){

   console.log('code ran')
    this.https.get(this.uri + '/yourprojects')
    .subscribe((response: any) => {
      console.log("third")
     this.user_firstname =  response.get_user_name;
     this.user_lastname =  response.get_user_password;
      this.get_all_users =response.get_all_users;
      console.log(this.get_all_users)

      //change below
    //  this.get_all_users =  new TeamMemberModel(response.get_user_name, response.get_user_password, "id20")
      console.log(this.get_all_users)

      })
  }


  apiCall() {

        this.serviceData = this.https.get(this.uri);
        console.log(this.serviceData)
        return this.serviceData;

  }

  getArrayCount(){

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
    if(this.jwtHelper.isTokenExpired(token)){

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

  getUsers(){

   this.return_users
    this.https.get(this.uri + '/users')
    .subscribe((response: any) => {

      this.return_users = response.get_user_name;
      console.log(this.return_users)

      this.get_all_users =  new TeamMemberModel(response.get_user_name, response.get_user_password, "id20")
      this.users.push(this.get_all_users)
      console.log(this.get_all_users)
      })


    // get all users from db

    // for each user retrieved from db

    // create new TeamMemberModel with the user first last name and id
    // new TeamMemberModel()

    // push team member model to this.users
  }


}
