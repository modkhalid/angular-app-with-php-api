import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin;
  constructor(private route:Router) { 
    if(localStorage.getItem('token')){
      this.isLogin=true;
    }else{
      this.isLogin=false;
    }
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/home'])
  }

}
