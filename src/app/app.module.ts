import { AuthGuard } from './common/auth-guard.service';
import { AuthService } from './common/auth.service';
import { LogiService } from './common/login.service';
import { CommentService } from './common/comment.servie';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './common/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { CommentComponent } from './comment/comment.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostComponent,
    GetComponent,
    UpdateComponent,
    CommentComponent,
    ViewComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"post",
        component:PostComponent
      },
      {
        path:'comment/:userid',
        component:CommentComponent
      },
      {
        path:'admin',
        component:AdminComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'view/:userid',
        component:ViewComponent
      },
      {
        path:'update/:userid',
        component:UpdateComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'**',
        component:GetComponent
      }
    ])
  ],
  providers: [
    AuthService,
    ApiService,
    CommentService,
    LogiService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
