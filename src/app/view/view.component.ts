import { ApiService } from './../common/api.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from './../common/comment.servie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  posts;
  comments;
  article;

  constructor(private service:CommentService,
    private route:ActivatedRoute,
    private api:ApiService) {

      this.article=this.route.snapshot.paramMap.get('userid');

      console.log(this.article)


  }CommentService

  ngOnInit() {
    this.api.get(this.article)
      .subscribe(
        response=>{
          console.log(response)
          
          this.posts=response
        }
      )

    this.service.getPost(JSON.stringify({'article':this.article}))
    .subscribe(
      res=>{
        // console.log(res)
        this.comments=res;
      }
    )
  }

}
