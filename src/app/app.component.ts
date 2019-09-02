import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){

  }

  title = 'gas-south';

  loginPage(){

    this.router.navigateByUrl("/login")
  }

  completedProjectsPage(){

    this.router.navigateByUrl("/completed-projects")
  }

  activeProjectsPage(){

    this.router.navigateByUrl("/active-projects")
  }

  masterCalendarPage(){

    this.router.navigateByUrl("/master-calendar")
  }




}
