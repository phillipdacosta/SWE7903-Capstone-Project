import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import googleCalendarPlugin from '@fullcalendar/google-calendar';


@Component({
  selector: 'app-master-calendar',
  templateUrl: './master-calendar.component.html',
  styleUrls: ['./master-calendar.component.css']
})
export class MasterCalendarComponent {

  get_token: any;
  show_expiration_flag: Boolean = false;
  today: any;


  // US Holidays start

  new_years_day: string;
  new_years_date: string;

  martin_luther_king_day: string;
  martin_luther_king_date: string;

  valentines_date: string;
  valentines_day: string;

  holiday_data_date: string;
  holiday_data_day: string;

  presidents_day: string;
  presidents_date: string;

  daylight_start: string;
  daylight_start_date: string;

  st_patty_day: string;
  st_patty_date: string;

  tax_day: string;
  tax_date: string;

  easter_sunday_day: string;
  easter_sunday_date: string;

  ea_monday_day: string;
  ea_monday_date: string;

  cinco_de_mayo_day: string;
  cinco_de_mayo_date: string;

  mothers_day: string;
  mothers_date: string;

  memorial_day: string;
  memorial_date: string;

  fathers_day: string;
  fathers_date: string;

  independence_day: string;
  independence_date: string;

  labor_day: string;
  labor_date: string;

  halloween_day: string;
  halloween_date: string;

  veterans_day: string;
  veterans_date: string;

  thanksgiving_day: string;
  thanksgiving_date: string;

  black_friday_day: string;
  black_friday_date: string;

  christmas_eve_day: string;
  christmas_eve_date: string;

  christmas_day: string;
  christmas_date: string;

  ny_eve_day: string;
  ny_eve_date: string;

  // US Holidays end


  // Indian Holidays start


  Guru_day: string;
  Guru_date: string;

  makar_day: string;
  makar_date: string;

  pongal: string;
  pongal_date: string;

  republic_day: string;
  republic_date: string;

  lori_day: string;
  lori_date: string;

  vasant_day: string;
  vasant_date: string;

  Jayanti_day: string;
  Jayanti_date: string;

  Shivaji_day: string;
  Shivaji_date: string;


  Maharishi_day: string;
  Maharishi_date: string;

  Maha_day: string;
  Maha_date: string;

  Holika_day: string;
  Holika_date: string;

  Dolyatra_day: string;
  Dolyatra_date: string;

  Hazarat_day: string;
  Hazarat_date: string;

  holi_day: string;
  holi_date: string;

  Chaitra_day: string;
  Chaitra_date: string;

  Rama_day: string;
  Rama_date: string;

  Ambedkar_day: string;
  Ambedkar_date: string;

  Mesadi_day: string;
  Mesadi_date: string;

  Vaisakhi_day: string;
  Vaisakhi_date: string;

  Mahavir_day: string;
  Mahavir_date: string;

  good_friday_day: string;
  good_friday_date: string;

  easter_day: string;
  easter_date: string;

  Ravindranath_day: string;
  Ravindranath_date: string;

  Buddha_day: string;
  Buddha_date: string;

  Jamat_day: string;
  Jamat_date: string;

  Ramzan_day: string;
  Ramzan_date: string;

  Rath_day: string;
  Rath_date: string;

  Bakr_day: string;
  Bakr_date: string;

  Independence_day: string;
  Independence_date: string;

  Raksha_day: string;
  Raksha_date: string;

  Parsi_day: string;
  Parsi_date: string;

  Janmashtami_day: string;
  Janmashtami_date: string;

  Ganesh_day: string;
  Ganesh_date: string;

  Muharram_day: string;
  Muharram_date: string;

  Onam_day: string;
  Onam_date: string;

  Mahatma_day: string;
  Mahatma_date: string;

  Saptami_day: string;
  Saptami_date: string;

  Ashtami_day: string;
  Ashtami_date: string;

  Navami_day: string;
  Navami_date: string;

  Dussehra_day: string;
  Dussehra_date: string;

  Valmiki_day: string;
  Valmiki_date: string;

  Chaturthi_day: string;
  Chaturthi_date: string;

  Diwali_day: string;
  Diwali_date: string;

  Naraka_day: string;
  Naraka_date: string;

  Govardhan_day: string;
  Govardhan_date: string;

  Bhai_day: string;
  Bhai_date: string;

  Chhat_day: string;
  Chhat_date: string;

  uMilad_day : string;
  uMilad_date : string;

  Jayantid_day : string;
  Jayantid_date : string;

  Martyrdom_day: string;
  Martyrdom_date : string;

  Christmas_eve_day : string;
  Christmas_eve_date : string;

  Christmas_day_day : string;
  Christmas_day_date : string;

  nye_day : string;
  nye_date : string;
  
  currentDate: any;
  constructor(private service: ServiceService, private router: Router) {


  }

  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;

  calendarEvents: EventInput[] = [

    { title: "Today ", start: new Date(), allDay: true , color: 'Orange',   // an option!
    textColor: 'white'},

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

  delete() {

    //  this.calendarEvents.fullCalendar('removeEvents');             


  }

  showUSHolidays() {

    var el = document.getElementsByTagName('h2')[0].innerHTML // or some other element reference
    let new_year = el;
    let year = el.substring(new_year.length - 4)
    console.log("THIS IS THE YEAR " + year)

    console.log(el)

    console.log(this.calendarComponent);

    let holiday_date = "";
    let holiday_name = ""

    let observable = this.service.apiCall(year)
    observable.subscribe(data => {


      for (let i = 0; i < data.response.holidays.length; i++) {

        holiday_date = data.response.holidays[i].date.iso.replace(/-/g, '/');
        holiday_name = data.response.holidays[i].name


        //console.log(holiday_name)

        if (holiday_name == "New Year's Day") {

          this.new_years_day = holiday_name;
          this.new_years_date = holiday_date
        }


        if (holiday_name == "Martin Luther King Jr. Day") {

          this.martin_luther_king_day = holiday_name;
          this.martin_luther_king_date = holiday_date
        }

        if (holiday_name == "Valentine's Day") {

          this.valentines_day = holiday_name;
          this.valentines_date = holiday_date
          console.log("VALENTINES" + this.valentines_date)

        }
        /*
                if(holiday_name == "Presidents' Day"){
        
                  this.presidents_day = holiday_name;
                  this.presidents_date = holiday_date
                  console.log("PRESIDENTS DAY" + this.presidents_day)
                  console.log("PRESIDENTS DAY" + this.presidents_date)
        
                }
        */
        if (holiday_name == "Daylight Saving Time starts") {

          this.daylight_start = holiday_name;
          this.daylight_start_date = holiday_date
          console.log('daylight_start ' + this.daylight_start)
          console.log('daylight_start ' + this.daylight_start_date)

        }

        if (holiday_name == "St. Patrick's Day") {

          this.st_patty_day = holiday_name;
          this.st_patty_date = holiday_date
        }

        if (holiday_name == "Tax Day") {

          this.tax_day = holiday_name;
          this.tax_date = holiday_date
        }

        if (holiday_name == "Easter Sunday") {

          this.easter_sunday_day = holiday_name;
          this.easter_sunday_date = holiday_date
        }


        if (holiday_name == "Easter Monday") {

          this.ea_monday_day = holiday_name;
          this.ea_monday_date = holiday_date
        }

        if (holiday_name == "Cinco de Mayo") {

          this.cinco_de_mayo_day = holiday_name;
          this.cinco_de_mayo_date = holiday_date
        }


        if (holiday_name == "Mother's Day") {

          this.mothers_day = holiday_name;
          this.mothers_date = holiday_date
        }

        if (holiday_name == "Memorial Day") {

          this.memorial_day = holiday_name;
          this.memorial_date = holiday_date
        }


        if (holiday_name == "Father's Day") {

          this.fathers_day = holiday_name;
          this.fathers_date = holiday_date
        }

        if (holiday_name == "Independence Day") {

          this.independence_day = holiday_name;
          this.independence_date = holiday_date
        }


        if (holiday_name == "Labor Day") {

          this.labor_day = holiday_name;
          this.labor_date = holiday_date
        }

        if (holiday_name == "Halloween") {

          this.halloween_day = holiday_name;
          this.halloween_date = holiday_date
        }


        if (holiday_name == "Veterans Day") {

          this.veterans_day = holiday_name;
          this.veterans_date = holiday_date
        }

        if (holiday_name == "Thanksgiving Day") {

          this.thanksgiving_day = holiday_name;
          this.thanksgiving_date = holiday_date
        }

        if (holiday_name == "Black Friday") {

          this.black_friday_day = holiday_name;
          this.black_friday_date = holiday_date
        }

        if (holiday_name == "Christmas Eve") {

          this.christmas_eve_day = holiday_name;
          this.christmas_eve_date = holiday_date
        }

        if (holiday_name == "Christmas Day") {

          this.christmas_day = holiday_name;
          this.christmas_date = holiday_date
        }


        if (holiday_name == "New Year's Eve") {

          this.ny_eve_day = holiday_name;
          this.ny_eve_date = holiday_date

          console.log("NEW YEAR EVE " + this.ny_eve_day)

          console.log("NEW YEAR EVE " + this.ny_eve_date)
        }



      }


      this.calendarEvents = [


        { title: "Today ", start: new Date(), allDay: true , color: 'Orange',   // an option!
        textColor: 'white'},

        { title: this.new_years_day, start: new Date(this.new_years_date), allDay: true },

        { title: this.martin_luther_king_day, start: new Date(this.martin_luther_king_date), allDay: true },

        { title: this.valentines_day, start: new Date(this.valentines_date), allDay: true },

        { title: this.presidents_day, start: new Date(this.presidents_date), allDay: true },

        { title: this.daylight_start, start: new Date(this.daylight_start_date), allDay: true },

        { title: this.st_patty_day, start: new Date(this.st_patty_date), allDay: true },

        { title: this.tax_day, start: new Date(this.tax_date), allDay: true },

        { title: this.easter_sunday_day, start: new Date(this.easter_sunday_date), allDay: true },

        { title: this.ea_monday_day, start: new Date(this.ea_monday_date), allDay: true },

        { title: this.cinco_de_mayo_day, start: new Date(this.cinco_de_mayo_date), allDay: true },

        { title: this.mothers_day, start: new Date(this.mothers_date), allDay: true },

        { title: this.memorial_day, start: new Date(this.memorial_date), allDay: true },

        { title: this.fathers_day, start: new Date(this.fathers_date), allDay: true },

        { title: this.independence_day, start: new Date(this.independence_date), allDay: true },

        { title: this.labor_day, start: new Date(this.labor_date), allDay: true },

        { title: this.halloween_day, start: new Date(this.halloween_date), allDay: true },

        { title: this.veterans_day, start: new Date(this.veterans_date), allDay: true },

        { title: this.thanksgiving_day, start: new Date(this.thanksgiving_date), allDay: true },

        { title: this.black_friday_day, start: new Date(this.black_friday_date), allDay: true },

        { title: this.christmas_eve_day, start: new Date(this.christmas_eve_date), allDay: true },

        { title: this.christmas_day, start: new Date(this.christmas_date), allDay: true },

        { title: this.ny_eve_day, start: new Date(this.ny_eve_date), allDay: true },

      ];

    })
  }



  showIndianHolidays() {

    var el = document.getElementsByTagName('h2')[0].innerHTML // or some other element reference
    let new_year = el;
    let year = el.substring(new_year.length - 4)
    console.log("THIS IS THE YEAR " + year)
    //var text = el.innerText || el.textContent;  

    console.log(el)

    console.log(this.calendarComponent);

    let holiday_date_india = "";
    let holiday_name_india = ""

    let observable_india = this.service.apiCallIndian(year)
    observable_india.subscribe(data_india => {


      for (let i = 0; i < data_india.response.holidays.length; i++) {

        holiday_date_india = data_india.response.holidays[i].date.iso.replace(/-/g, '/');
        holiday_name_india = data_india.response.holidays[i].name


        console.log(holiday_name_india)

        if (holiday_name_india == "New Year's Day") {

          this.new_years_day = holiday_name_india;
          this.new_years_date = holiday_date_india
        }

        if (holiday_name_india == "Guru Govind Singh Jayanti") {

          this.Guru_day = holiday_name_india;
          this.Guru_date = holiday_date_india
        }

        if (holiday_name_india == "Lori") {

          this.lori_day = holiday_name_india;
          this.lori_date = holiday_date_india
        }


        if (holiday_name_india == "Makar Sankranti") {

          this.makar_day = holiday_name_india;
          this.makar_date = holiday_date_india
        }


        if (holiday_name_india == "Pongal") {

          this.pongal = holiday_name_india;
          this.pongal_date = holiday_date_india
        }

        if (holiday_name_india == "Republic") {

          this.republic_day = holiday_name_india;
          this.republic_date = holiday_date_india
        }


        if (holiday_name_india == "Vasant Panchami") {

          this.vasant_day = holiday_name_india;
          this.vasant_date = holiday_date_india
        }


        if (holiday_name_india == "Guru Ravidas Jayanti") {

          this.Jayanti_day = holiday_name_india;
          this.Jayanti_date = holiday_date_india
        }

        if (holiday_name_india == "Shivaji Jayanti") {

          this.Shivaji_day = holiday_name_india;
          this.Shivaji_date = holiday_date_india
        }


        if (holiday_name_india == "Maharishi Dayanand Saraswati Jayanti") {

          this.Maharishi_day = holiday_name_india;
          this.Maharishi_date = holiday_date_india
        }


        if (holiday_name_india == "Maharishi Dayanand Saraswati Jayanti") {

          this.Maharishi_day = holiday_name_india;
          this.Maharishi_date = holiday_date_india
        }

        if (holiday_name_india == "Maha Shivaratri/Shivaratri") {

          this.Maha_day = holiday_name_india;
          this.Maha_date = holiday_date_india
        }

        if (holiday_name_india == "Holika Dahana") {

          this.Holika_day = holiday_name_india;
          this.Holika_date = holiday_date_india
        }


        if (holiday_name_india == "Dolyatra") {

          this.Dolyatra_day = holiday_name_india;
          this.Dolyatra_date = holiday_date_india
        }

        if (holiday_name_india == "Hazarat Ali's Birthday") {

          this.Hazarat_day = holiday_name_india;
          this.Hazarat_date = holiday_date_india
        }

        if (holiday_name_india == "Holi") {

          this.holi_day = holiday_name_india;
          this.holi_date = holiday_date_india
        }


        if (holiday_name_india == "Chaitra Sukhladi") {

          this.Chaitra_day = holiday_name_india;
          this.Chaitra_date = holiday_date_india
        }

        if (holiday_name_india == "Chaitra Sukhladi") {

          this.Chaitra_day = holiday_name_india;
          this.Chaitra_date = holiday_date_india
        }

        if (holiday_name_india == "Rama Navami") {

          this.Rama_day = holiday_name_india;
          this.Rama_date = holiday_date_india
        }

        if (holiday_name_india == "Ambedkar Jayanti") {

          this.Ambedkar_day = holiday_name_india;
          this.Ambedkar_date = holiday_date_india
        }


        if (holiday_name_india == "Mesadi/Vaisakhadi") {

          this.Mesadi_day = holiday_name_india;
          this.Mesadi_date = holiday_date_india
        }

        if (holiday_name_india == "Vaisakhi") {

          this.Vaisakhi_day = holiday_name_india;
          this.Vaisakhi_date = holiday_date_india
        }

        if (holiday_name_india == "Mahavir Jayanti") {

          this.Mahavir_day = holiday_name_india;
          this.Mahavir_date = holiday_date_india
        }

        if (holiday_name_india == "Good Friday") {

          this.good_friday_day = holiday_name_india;
          this.good_friday_day = holiday_date_india
        }

        if (holiday_name_india == "Easter Day") {

          this.easter_day = holiday_name_india;
          this.easter_day = holiday_date_india
        }

        if (holiday_name_india == "Birthday of Ravindranath") {

          this.Ravindranath_day = holiday_name_india;
          this.Ravindranath_date = holiday_date_india
        }

        if (holiday_name_india == "Buddha Purnima/Vesak") {

          this.Buddha_day = holiday_name_india;
          this.Buddha_date = holiday_date_india
        }

        if (holiday_name_india == "Jamat Ul-Vida") {

          this.Jamat_day = holiday_name_india;
          this.Jamat_date = holiday_date_india
        }

        if (holiday_name_india == "Ramzan Id/Eid-ul-Fitar") {

          this.Ramzan_day = holiday_name_india;
          this.Ramzan_date = holiday_date_india
        }

        if (holiday_name_india == "Rath Yatra") {

          this.Rath_day = holiday_name_india;
          this.Rath_date = holiday_date_india
        }

        if (holiday_name_india == "Bakr Id/Eid ul-Adha") {

          this.Bakr_day = holiday_name_india;
          this.Bakr_date = holiday_date_india
        }

        if (holiday_name_india == "Independence Day") {

          this.Independence_day = holiday_name_india;
          this.Independence_date = holiday_date_india
        }

        if (holiday_name_india == "Raksha Bandhan (Rakhi)") {

          this.Raksha_day = holiday_name_india;
          this.Raksha_date = holiday_date_india
        }

        if (holiday_name_india == "Parsi New Year") {

          this.Parsi_day = holiday_name_india;
          this.Parsi_date = holiday_date_india
        }

        if (holiday_name_india == "Janmashtami") {

          this.Janmashtami_day = holiday_name_india;
          this.Janmashtami_date = holiday_date_india
        }

        if (holiday_name_india == "Ganesh Chaturthi/Vinayaka Chaturthi") {

          this.Ganesh_day = holiday_name_india;
          this.Ganesh_date = holiday_date_india
        }

        if (holiday_name_india == "Muharram/Ashura") {

          this.Muharram_day = holiday_name_india;
          this.Muharram_date = holiday_date_india
        }

        if (holiday_name_india == "Onam") {

          this.Onam_day = holiday_name_india;
          this.Onam_date = holiday_date_india
        }

        if (holiday_name_india == "Mahatma Gandhi Jayanti") {

          this.Mahatma_day = holiday_name_india;
          this.Mahatma_date = holiday_date_india
        }

        if (holiday_name_india == "Maha Saptami") {

          this.Saptami_day = holiday_name_india;
          this.Saptami_day = holiday_date_india
        }

        if (holiday_name_india == "Maha Ashtami") {

          this.Ashtami_day = holiday_name_india;
          this.Ashtami_date = holiday_date_india
        }

        if (holiday_name_india == "Maha Navami") {

          this.Navami_day = holiday_name_india;
          this.Navami_date = holiday_date_india
        }

        if (holiday_name_india == "Dussehra") {

          this.Dussehra_day = holiday_name_india;
          this.Dussehra_date = holiday_date_india
        }

        if (holiday_name_india == "Maharishi Valmiki Jayanti") {

          this.Valmiki_day = holiday_name_india;
          this.Valmiki_date = holiday_date_india
        }

        if (holiday_name_india == "Karaka Chaturthi (Karva Chauth)") {

          this.Chaturthi_day = holiday_name_india;
          this.Chaturthi_date = holiday_date_india
        }

        if (holiday_name_india == "Diwali/Deepavali") {

          this.Diwali_day = holiday_name_india;
          this.Diwali_date = holiday_date_india
        }

        if (holiday_name_india == "Naraka Chaturdasi") {

          this.Naraka_day = holiday_name_india;
          this.Naraka_date = holiday_date_india
        }

        if (holiday_name_india == "Govardhan Puja") {

          this.Govardhan_day = holiday_name_india;
          this.Govardhan_date = holiday_date_india
        }


        if (holiday_name_india == "Bhai Duj") {

          this.Bhai_day = holiday_name_india;
          this.Bhai_date = holiday_date_india
        }

        if (holiday_name_india == "Chhat Puja (Pratihar Sashthi/Surya Sashthi)") {

          this.Chhat_day = holiday_name_india;
          this.Chhat_date = holiday_date_india
        }


        if (holiday_name_india == "Milad un-Nabi/Id-e-Milad") {

          this.uMilad_day = holiday_name_india;
          this.uMilad_date = holiday_date_india
        }

        if (holiday_name_india == "Guru Nanak Jayantid") {

          this.Jayantid_day = holiday_name_india;
          this.Jayantid_date = holiday_date_india
        }

        if (holiday_name_india == "Guru Tegh Bahadur's Martyrdom Day") {

          this.Martyrdom_day = holiday_name_india;
          this.Martyrdom_date = holiday_date_india
        }


        if (holiday_name_india == "Christmas Eve") {

          this.Christmas_eve_day = holiday_name_india;
          this.Christmas_eve_date = holiday_date_india
        }

        if (holiday_name_india == "Christmas") {

          this.Christmas_day_day = holiday_name_india;
          this.Christmas_day_date = holiday_date_india
        }

        if (holiday_name_india == "New Year's Eve") {

          this.nye_day = holiday_name_india;
          this.nye_date = holiday_date_india
        }


      }
      //New Year's Eve

      this.calendarEvents = [

        { title: "Today ", start: new Date(), allDay: true , color: 'Orange',   // an option!
        textColor: 'white'},

        {
          title: this.new_years_day, start: new Date(this.new_years_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Guru_day, start: new Date(this.Guru_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.lori_day, start: new Date(this.lori_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.makar_day, start: new Date(this.makar_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.pongal, start: new Date(this.pongal_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.republic_day, start: new Date(this.republic_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.vasant_day, start: new Date(this.vasant_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Jayanti_day, start: new Date(this.Jayanti_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Shivaji_day, start: new Date(this.Shivaji_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Maharishi_day, start: new Date(this.Maharishi_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Maha_day, start: new Date(this.Maha_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Dussehra_day, start: new Date(this.Dussehra_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Valmiki_day, start: new Date(this.Valmiki_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Chaturthi_day, start: new Date(this.Chaturthi_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Diwali_day, start: new Date(this.Diwali_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Naraka_day, start: new Date(this.Naraka_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },


        {
          title: this.Govardhan_day, start: new Date(this.Govardhan_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Bhai_day, start: new Date(this.Bhai_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Chhat_day, start: new Date(this.Chhat_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.uMilad_day, start: new Date(this.uMilad_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Jayantid_day, start: new Date(this.Jayantid_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Martyrdom_day, start: new Date(this.Martyrdom_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Christmas_eve_day, start: new Date(this.Christmas_eve_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.Christmas_day_day, start: new Date(this.Christmas_day_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

        {
          title: this.ny_eve_day, start: new Date(this.ny_eve_date), allDay: true, color: 'Green',   // an option!
          textColor: 'white'
        },

      ];

    })
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


    console.log('WL' + this.service.jwtHelper.isTokenExpired(this.get_token));




  }

}