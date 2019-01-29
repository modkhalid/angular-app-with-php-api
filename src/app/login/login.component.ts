import { LogiService } from './../common/login.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  isLogin=true;
  constructor(private route:Router, private fb:FormBuilder,private service:LogiService) { 
    this.form=fb.group({
      email:[],
      password:[]
    })
  }
  login(){
    // console.log(this.form.value)
    this.service.getPost(JSON.stringify(this.form.value))
      .subscribe(
        res=>{
          if(res){
            this.route.navigate(['/home'])
          }else{
            this.isLogin=false
          }
        }
      )
  }

  ngOnInit() {
  }

}
