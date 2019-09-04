import { Component, OnInit, Injectable } from '@angular/core';
import { Team } from '../team.model';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-your-project',
  templateUrl: './your-project.component.html',
  styleUrls: ['./your-project.component.css']
})
export class YourProjectComponent implements OnInit {

  test : any = '';
  display_data : any;
  count : any;

  constructor(private service : ServiceService, public http: HttpClient) { }

  ngOnInit() {

   this.test = this.service.data_received;
   

  }

  save(){

    this.service.fromCompletedProjects(this.test)


}

display(){

 // this.test = this.service.data_received;
  console.log(this.test)
 // this.display_data = localStorage.getItem('message')
}

newProject(){

  let team = new Team();
  this.service.teamlist.push(team)
  console.log(this.service.teamlist)
  this.count = this.service.teamlist.length
  this.service.counter = this.count

}




}
