import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { MasterCalendarComponent } from './master-calendar/master-calendar.component';
import { GuestComponent } from './guest/guest.component';
import { YourProjectComponent } from './your-project/your-project.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { 
  ServiceService as AuthGuard 
} from './service.service';



const routes: Routes = [

  { path: 'login', component : LoginComponent },

  { path: 'guest', component : GuestComponent },

  { path: 'yourproject', component : YourProjectComponent , canActivate: [AuthGuard]},

  { path: 'create-user', component : CreateuserComponent , canActivate: [AuthGuard]},


  { path: 'completed-projects', component : CompletedProjectsComponent},

  { path: 'active-projects', component : ActiveProjectsComponent },

  { path: 'master-calendar', component : MasterCalendarComponent},


  {path: '**', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
