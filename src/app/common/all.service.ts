import { AuthService } from './auth.service';
import { BadError } from '../common/bad-error';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { Response } from 'selenium-webdriver/http';
// corsproxy
@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(protected url,protected http:HttpClient) {

   }

  get(args?:any) {
    if(args) {
      return this.http.get(this.url +"get/" +args);
    } else {
      return this.http.get(this.url + "get/");
    }

  }

  getPost(post) {
    return this.http.post(this.url + "get/", post).pipe(
      catchError(this.ErrorHandlerMethod),
      map(response => {

          if (response[0].token) {
            localStorage.setItem('token', response[0].token);
            return true;
          }
          return false;

      })

    );
  }

  create(post) {
    // console.log("e")

    return this.http.post(this.url + "post/", post).pipe(
      catchError(this.ErrorHandlerMethod)
    );
  }


  update(post) {
    return this.http.post(this.url + "/update", post).pipe(
      catchError(this.ErrorHandlerMethod)
    );
  }


  delete(post) {
    return this.http.delete(this.url + "/delete/" + post.id)
      .pipe(catchError(this.ErrorHandlerMethod));

  }


  protected ErrorHandlerMethod(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }
    if (error.status === 400) {
      return throwError(new BadError(error));
    }
    return throwError(new AppError(error));
  }

}
