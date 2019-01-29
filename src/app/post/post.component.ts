import { ApiService } from './../common/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit() {
  }

  onSubmit(data){
    // console.log(JSON.parse(JSON.stringify(data.value)));
    console.log(JSON.stringify(data.value))
    this.service.create(JSON.stringify(data.value))
    .subscribe(
      response=>{
        console.log(response)
      }
    )
    data.reset();


  }

}
