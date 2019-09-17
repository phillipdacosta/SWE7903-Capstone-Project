import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master-calendar',
  templateUrl: './master-calendar.component.html',
  styleUrls: ['./master-calendar.component.css']
})
export class MasterCalendarComponent {

  get_token : any;
  show_expiration_flag : Boolean = false;

  constructor(private service : ServiceService, private router : Router){


  }

  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  delete(){

  //  this.calendarEvents.fullCalendar('removeEvents');             


  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

  ngOnInit() { 

    this.get_token = localStorage.getItem("auth_token")
   // if(this.service.jwtHelper.isTokenExpired(this.get_token)){

     console.log('WL' + this.service.jwtHelper.isTokenExpired(this.get_token));
   // console.log(this.service.check);
    
  }

}
