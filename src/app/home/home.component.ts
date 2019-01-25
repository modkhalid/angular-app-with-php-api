import { ApiService } from './../common/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;
  constructor(private service:ApiService) { }

  ngOnInit() {
    this.service.get()
    .subscribe(response=>{
      console.log(response);
      this.posts=response;

    });
  }

}
