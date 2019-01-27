import { CommentService } from './../common/comment.servie';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  form;
  article;
  constructor(private service:CommentService,
    private route:ActivatedRoute,
    private fb:FormBuilder) {

      this.article=this.route.snapshot.paramMap.get('userid');

      this.form=fb.group({
        name:[],
        content:[],
        id:[this.article]
        // check:[true]
      })


  }
  postComment(){
    console.log(this.form.value)
    this.service.create(JSON.stringify(this.form.value))
      .subscribe(
        response=>{
          console.log(response)
        }
      )
  }

  ngOnInit() {
  }

}
