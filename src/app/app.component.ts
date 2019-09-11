import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,private service : ServiceService){

  }

  username = "capstone"
  password = "capstone"
  title = 'gas-south';
  flag : boolean ;
  get_user_name : any;
  hide_welcome : boolean = false;
  show_expiration_flag : Boolean = false;
  get_token : any;
  loginPage(){

    this.router.navigateByUrl("/login")


  }

  logout(){

    this.service.logout();

  }

  manageUsersPage(){

    this.router.navigateByUrl("/manage-user")
  }

  createUserPage(){

      this.service.fetching();
      this.router.navigateByUrl("/create-user")

  }

  completedProjectsPage(){
    
    
    console.log('fetching data from DB...')
    this.service.fetching();
    this.router.navigateByUrl("/completed-projects")
  }

  activeProjectsPage(){

    this.router.navigateByUrl("/active-projects")
    this.service.fetching();

  }

  masterCalendarPage(){


    this.router.navigateByUrl("/master-calendar")
    
    this.service.fetching();

    

  }

  yourProjectPage(){

    this.router.navigateByUrl("/yourproject")
    this.service.fetching();

  }

  ngOnInit() { 

    this.service.get_user = localStorage.getItem('username') 

    setTimeout(() => {
    this.hide_welcome = false;
    }, 5);

    this.get_token = localStorage.getItem("auth_token")
    if(this.service.jwtHelper.isTokenExpired(this.get_token)){

      this.show_expiration_flag = true;
    }

  }

 
}
