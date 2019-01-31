import { AuthService } from './../common/auth.service';
// import { LogiService } from './../common/login.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  isLogin = true;
  constructor(private router: ActivatedRoute , private route: Router, private fb: FormBuilder, private service: AuthService) {
    this.form = fb.group({
      email: [],
      password: []
    });
  }
  login() {
    this.service.get(JSON.stringify(this.form.value))
      .subscribe(
        res => {
          if (res) {
            const url = this.router.snapshot.queryParamMap.get('returnUrl');
            this.route.navigate([url || '/home']);
          } else {
            this.isLogin = false;
          }
        }
      );
  }

  ngOnInit() {
  }

}
