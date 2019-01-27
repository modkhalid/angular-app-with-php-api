import { ApiService } from './../common/api.service';
import { Component, OnInit, ErrorHandler } from '@angular/core';
import { catchError } from 'rxjs/operators';

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

  deletePost(item){
    this.posts.splice(this.posts.indexOf(item),1);
    this.service.delete(item).subscribe(
      response=>{
        console.log(response)
      }
    )
      
  }

}
