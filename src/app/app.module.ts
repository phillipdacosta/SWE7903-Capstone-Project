import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { MasterCalendarComponent } from './master-calendar/master-calendar.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { GuestComponent } from './guest/guest.component';
import { ProjectComponent } from './project/project.component';
import { YourProjectComponent } from './your-project/your-project.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateuserComponent } from './createuser/createuser.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectteamComponent } from './projectteam/projectteam.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageUserViewComponent } from './manage-user-view/manage-user-view.component';
import { ManagerUserEditsComponent } from './manager-user-edits/manager-user-edits.component';
import { ActiveProjectsViewComponent } from './active-projects-view/active-projects-view.component';
import { CompletedProjectsViewComponent } from './completed-projects-view/completed-projects-view.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompletedProjectsComponent,
    ActiveProjectsComponent,
    MasterCalendarComponent,
    GuestComponent,
    ProjectComponent,
    YourProjectComponent,
    CreateuserComponent,
    ManageUsersComponent,
    AdminComponent,
    ProjectteamComponent,
    ProfileComponent,
    ManageUserViewComponent,
    ManagerUserEditsComponent,
    ActiveProjectsViewComponent,
    CompletedProjectsViewComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ManageUserViewComponent, AppComponent, ManagerUserEditsComponent, ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
