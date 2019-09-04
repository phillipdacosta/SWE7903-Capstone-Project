import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Team } from './team.model';


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
  teamlist: Array<Team>;
  project_manager : any;
  business_analyst : any;
  QA : any;
  product_owner : any;
  counter : any;

  constructor(private https: HttpClient) { 
    
    this.teamlist = new Array<Team>();

  }

  fromCompletedProjects(test : Array<Team>){

    console.log(test)
    console.log("first")
    this.https.post(this.uri + '/test', {test})
    .subscribe((response: any) => {
      console.log("second")

     this.data_sent = response.message_user
     console.log(this.data_sent)

      })
  }


  fetching(){

   console.log('code ran')
    this.https.get(this.uri + '/other')
    .subscribe((response: any) => {
      console.log("third")

     this.data_received = response.new_user_message
     //this.product_owner = response.Product_manager
     console.log(this.data_received.Project_manager)
     console.log(this.product_owner)
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

  getArrayCount(){

    return this.teamlist.length
  }


}
