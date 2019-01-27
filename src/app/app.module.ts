// import { AllService } from './common/all.service';
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
// import { getComponent } from '@angular/core/src/render3';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostComponent,
    GetComponent,
    UpdateComponent
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
      // {
      //   path:'home/:userid',
      //   component:GetComponent
      // },
      {
        path:'update/:userid',
        component:UpdateComponent
      },
      {
        path:'**',
        component:GetComponent
      }
    ])
  ],
  providers: [
    // AllService
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
