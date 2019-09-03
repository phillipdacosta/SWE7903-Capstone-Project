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

  loginPage(){

    this.router.navigateByUrl("/login")
    this.service.fetching();


  }

  completedProjectsPage(){
    
    
    console.log('fetching data from DB...')
    this.service.fetching();
    this.loginPage();
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

 



}
