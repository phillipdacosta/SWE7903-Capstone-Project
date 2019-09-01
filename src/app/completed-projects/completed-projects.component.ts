import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.css']
})
export class CompletedProjectsComponent implements OnInit {

  display_data : any;

  constructor(private service : ServiceService, public http: HttpClient) { }

  ngOnInit() {
  }

  sendingRequest(){

    let obs = this.service.apiCall()
    obs.subscribe(returned_data => {

      this.display_data = returned_data.login;
      console.log(this.display_data)

      console.log(returned_data)

    })

}

}
