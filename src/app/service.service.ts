import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Team } from './team.model';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  //uri = "http://localhost:8079/#/projects"

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

  public jwtHelper = new JwtHelperService();

  constructor(private https: HttpClient, private router : Router) { 
    
    this.teamlist = new Array<Team>();

  }

  login(email: string, password: string) {

    console.log(email)
    console.log(password)

    this.https.post(this.uri + '/authenticate', {email: email,password: password})
    .subscribe((response: any) => {


          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('user', response.return_name);
          this.get_user = localStorage.getItem('user');
          this.check_email = response.return_name;
          this.check_password = response.return_password;
          this.new_user_message = response.return_message;
          console.log('Check password is: ' + this.check_password)

          console.log(this.cred_already_exist)
        //  this.router.navigate(['master-calendar']);
         console.log("is Auth is: " + this.isAuthenticated())

      })
     
    }

    subscribe(email: string, password: string, role : any) {

      console.log(email)
      console.log(password)
  
      console.error(this.uri)
      this.https.post(this.uri + '/subscribe', {email: email,password: password, role : role})
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


  fromCompletedProjects(test : Array<Team>){

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
    this.https.get(this.uri + '/other')
    .subscribe((response: any) => {
      console.log("third")

     this.data_received = response.new_user_message
     console.log(this.data_received.Project_manager)
     console.log(this.product_owner)

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
     this.router.navigateByUrl("/master-calendar")
    }
    console.log('token expired? : ' + this.jwtHelper.isTokenExpired(token))
    return !this.jwtHelper.isTokenExpired(token);
  }


  canActivate(): boolean {


    if (!this.isAuthenticated()) {

      console.log('User not authenticated')
     
      this.router.navigate(['login']);
    //  this.router.navigateByUrl('/master-calendar');

    } else {

      this.router.navigate(['master-calendar']);
      return true;
    }
  
  }


}
