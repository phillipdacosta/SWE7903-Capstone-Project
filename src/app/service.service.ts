import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  //uri = "http://localhost:8079/#/projects"

  uri = "https://pacific-thicket-17424.herokuapp.com"

  endpoint = "";
  data_received : any;
  data_sent : any;
  serviceData : any;


  constructor(private https: HttpClient) { 
    

  }

  fromCompletedProjects(test : string){

    console.log("first")
    this.https.post(this.uri + '/test', {test})
    .subscribe((response: any) => {
      console.log("second")

     this.data_sent = response.new_message
     console.log(this.data_sent)

      })
  }


  fetching(){

   console.log('code ran')
    this.https.get(this.uri + '/other')
    .subscribe((response: any) => {
      console.log("third")

     this.data_received = response.new_user_message
     console.log(this.data_received)
     //localStorage.setItem('message' , this.data_received)

      })
  }


  apiCall() {

        this.serviceData = this.https.get(this.uri);
        console.log(this.serviceData)
        return this.serviceData;
/*
    this.https.post(this.uri + this.endpoint, {})
    .subscribe((response: any) => {

      })
     
    }

 */


  }


}
