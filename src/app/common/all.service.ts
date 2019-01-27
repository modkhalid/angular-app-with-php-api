import { BadError } from '../common/bad-error';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
// corsproxy
@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private url,private http:HttpClient) {

   }
  
  get(args?:any){
    // console.log(args)
    if(args)
      return this.http.get(this.url+"get/"+args)
      // console.log(this.url+"get/"+args)
    else
      return this.http.get(this.url+"get/")
      // console.log("abcd")
    // console.log(args)
  }

  // create(post){
  //   // console.log(post);
  //   return this.http.post(this.url+"post/",post)
  //   .pipe(
  //       //********dont use map for json  */
  //       // map(response=>{response.json()}),
  //       //after angular two
  //       // response object is Alway in json array
  //       catchError(this.ErrorHandlerMethod))
  // }
  getPost(post){
    return this.http.post(this.url+"get/",post).pipe(
      catchError(this.ErrorHandlerMethod)
    )
  }

  create(post){
    // console.log("e")
    return this.http.post(this.url+"post/",post).pipe(
      catchError(this.ErrorHandlerMethod)
    )
  }

  // update(post){
  //   return this.http.patch(this.url+"/"+post.id,{isread:true})
  // }

  delete(post){
    return this.http.delete(this.url+"/delete/"+post.id)
      .pipe(catchError(this.ErrorHandlerMethod))
    
  }
  private ErrorHandlerMethod(error:Response){
    if (error.status == 404) {
      return throwError(new NotFoundError(error))   
    }
    if (error.status==400){
      return throwError(new BadError(error))
    } 
    return throwError(new AppError(error))
  }


  update(post){
    return this.http.post(this.url+"/update",post).pipe(
      catchError(this.ErrorHandlerMethod)
    )
  }
}
