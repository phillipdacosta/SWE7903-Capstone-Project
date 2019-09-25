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
  return_users : Array<TeamMemberModel>;
  user_firstname : any;
  user_lastname : any;
  user_email : any;
  get_all_users : any;
  users: Array<TeamMemberModel>;
  projectRoles: Array<ProjectRoleModel>
  set_user_name: any;
  roles : any;
  project_team : any;
  project : any;
  check : boolean = false;
  return_user_id : any;
  project_id_created_by_user : any;
  created_user_id : any;
  number_of_projects : any;
  array_of_projects : any;
  array_of_projects_role : any;
  show_spinner : boolean = false;
  array_of_projects_firstname : any;
  user_team : Array <UserModel>;
  return_project_team : Array<TeamMemberModel>;
  get_user_email : any;
  user_password : any;
  user_role : any;
  set_user_lastname : any;
  set_user_firstname: any;
  user_id : any;
  updated_firstname : any;
  updated_lastname : any;
  updated_email : any;
  user_profile : UserModel;


  public jwtHelper = new JwtHelperService();

  constructor(private https: HttpClient, private router : Router) { 
    
    this.teamlist = new Array<Team>();
    this.return_users = [];
    this.roles = [];
    this.created_user_id = [];
    this.number_of_projects = new Array();
    this.array_of_projects = new Array ();
    console.error("init", this.return_users);
    this.return_project_team = [];





  }

  login(user: UserModel) {

  
    console.log(user)
    this.https.post(this.uri + '/authenticate', {user})
    .subscribe((response: any) => {


          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('user', response.return_name);
          this.get_user = localStorage.getItem('user');
          this.check_email = response.return_email;
          this.set_user_name = localStorage.setItem('username',response.return_user_first_name);
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
          console.log( this.set_user_lastname)

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
      this.https.post(this.uri + '/subscribe', {user})
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
       
      }


      updateProfile(firstname, lastname, email, password, id){

         console.error(this.uri)
         this.https.post(this.uri + '/profile', {firstname,lastname, email, password, id})
         .subscribe((response: any) => {
      
          this.updated_firstname = response.updated_firstname;
          this.updated_lastname = response.updated_lastname;
          this.updated_email = response.updated_email;

          this.user_profile = new UserModel(this.updated_firstname,this.updated_lastname, this.updated_email)
          console.log('USSER PROFILE IN SERVICE: ' + this.user_profile._firstName)
           
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
   
    this.getProjects();
    console.log(this.show_spinner)
   console.log('code ran')
    this.https.get(this.uri + '/yourprojects')
    .subscribe((response: any) => {
      console.log("third")
     this.user_firstname = response.get_user_name;
     console.log('From fetching:' + this.user_firstname)
     this.user_lastname = response.get_user_password;
      this.get_all_users = response.get_all_users;
     // console.error("response", response);
      console.log(this.get_all_users)
      
      this.return_users = []      

     // console.error("users:", this.return_users)

      this.get_all_users.forEach(user => {
        const teamModel = new TeamMemberModel(user.user._firstName, user.user._lastName, user._id);
        this.return_users.push(teamModel);
        console.log("loop")
      });

     // console.error("users:", this.return_users);
    })

    console.log('this code ran in Save Roles')
     
      this.getProjects();
      this.fetchRoles();
   

  }

  fetchRoles(){

    this.https.get(this.uri + '/roles')
    .subscribe((response: any) => {
  
      this.roles = response.result
    //  console.log(this.roles)
     // console.error("roles:", this.roles);
    })

      //change below
    //  this.get_all_users =  new TeamMemberModel(response.get_user_name, response.get_user_password, "id20")


  }



  getProjects(){


    this.https.get(this.uri + '/getprojects')
    .subscribe((response: any) => {
  
      this.created_user_id = response.result
      console.log(this.created_user_id)

      let v;
      let array_of_projects = [];
    
      for (v = 0 ; v < this.created_user_id.length ; v++){

        if (this.created_user_id[v].created_by_user == this.return_user_id){

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
        const teamModel = new TeamMemberModel(team.projectteam[0]._firstName);
        this.return_project_team.push(teamModel);
        console.log("PROJECT TEAM" + this.return_project_team[0].firstName)
      });
  

    })

    

  }



  saveRoles(projectteam, created_by_user){

    this.return_user_id = created_by_user

    console.error(this.uri)
    this.https.post(this.uri + '/projects', {projectteam, created_by_user})
    .subscribe((response: any) => {
     
      this.project_team = response.project_team

 
      console.log(this.project_team)
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



}
