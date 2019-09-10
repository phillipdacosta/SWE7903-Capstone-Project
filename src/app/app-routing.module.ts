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
import { AuthorizationGuard } from './authorization.guard';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthorizationGuard],
    children: [
  
  { path: 'login', component : LoginComponent },

  { path: 'guest', component : GuestComponent },

  { path: 'yourproject', component : YourProjectComponent , data: {  allowedRoles: ['admin'] }},

  { path: 'create-user', component : CreateuserComponent , data: {  allowedRoles: [ 'admin'] }},

  { path: 'manage-user', component : ManageUsersComponent , data: {  allowedRoles: [ 'admin'] }},

  { path: 'completed-projects', component : CompletedProjectsComponent},

  { path: 'active-projects', component : ActiveProjectsComponent },

  { path: 'master-calendar', component : MasterCalendarComponent},


  {path: '**', component: LoginComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
