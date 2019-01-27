import { ApiService } from './../common/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userid;
  articles;
  // form;

  constructor(private route:ActivatedRoute,
    private service:ApiService) {


      this.route.paramMap.subscribe(
        response=>{
          this.userid=response.get('userid')
        }
      )


      this.service.get(this.userid)
        .subscribe(
          response=>{
            this.articles=response
            // console.log(this.articles)
            this.form.get('header').setValue(this.articles[0].header)
            this.form.get('body').setValue(this.articles[0].body)
            this.form.get('id').setValue(this.articles[0].id)
          }
        )


    }


    form=new FormGroup(
      {  
        header:new FormControl(),
        body:new FormControl(),
        id:new FormControl()
      }
    )


 update(){
    // console.log(this.articles)
    // console.log(this.form.value)
    this.service.update(JSON.stringify(this.form.value))
      .subscribe(
        response=>{
          console.log(response)
        }
      )
  }
    

  ngOnInit() {      
      
  }

}
