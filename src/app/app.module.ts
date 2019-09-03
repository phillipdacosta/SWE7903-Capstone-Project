import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { MasterCalendarComponent } from './master-calendar/master-calendar.component';
import { FormsModule }   from '@angular/forms';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompletedProjectsComponent,
    ActiveProjectsComponent,
    MasterCalendarComponent,
    GuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
