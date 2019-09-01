import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  //uri = "https://api.apixu.com/v1/forecast.json?key=6afffc9185b74f8b95e02918192103&q=Atlanta&days=7";
  uri = " https://api.github.com/users/phillipdacosta"
  endpoint = "";
  data_received : any;
  serviceData : any;

  constructor(private https: HttpClient) { 
    

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
