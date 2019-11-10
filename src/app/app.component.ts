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
    console.log("Hello")
    this.service.checkPassword();

  }

  logout(){

    this.service.logout();

  }

  manageUsersPage(){
    
    this.service.fetching();
    this.router.navigateByUrl("/manage-user")
  }


  manageUsersEditsPage(){
    
    this.service.fetching();
    this.router.navigateByUrl("/manage-user-edits")
    
  }
  
  createUserPage(){

      this.service.fetching();
      this.router.navigateByUrl("/create-user")

  }

  profilePage(){

    this.service.fetching();
    this.router.navigateByUrl("/profile")
    window.scrollTo({ top: 90, behavior: 'smooth' })

}

  completedProjectsPage(){
    
    
    this.service.fetching();
    this.router.navigateByUrl("/completed-projects")
  }



  activeProjectsPage(){

    this.service.fetching();
    this.router.navigateByUrl("/active-projects")

  }

  masterCalendarPage(){


    this.router.navigateByUrl("/master-calendar")
    this.service.getProjects();
    this.service.releaseDates();
    this.service.fetching();

    

  }

  yourProjectPage(){

    this.router.navigateByUrl("/yourproject")
    this.service.fetching();
    console.log('i am: ' + this.service.get_user)

  }

  ngOnInit() { 

    
    this.service.checkPassword()
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
