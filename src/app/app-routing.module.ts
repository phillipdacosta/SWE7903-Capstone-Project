import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { MasterCalendarComponent } from './master-calendar/master-calendar.component';


const routes: Routes = [

  { path: 'login', component : LoginComponent },


  { path: 'completed-projects', component : CompletedProjectsComponent },

  { path: 'active-projects', component : ActiveProjectsComponent},

  { path: 'master-calendar', component : MasterCalendarComponent},


  {path: '**', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
