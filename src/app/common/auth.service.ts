import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { AllService } from './all.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService extends AllService{
    constructor(htt:HttpClient,private route:Router){
        super('http://localhost:1337/khalid/login/',htt);
    }

    // @over
    
    get(post){
        return this.http.post(this.url+"get/",post).pipe(
          catchError(this.ErrorHandlerMethod),
          map(response=>{
            
              if(response[0].token){
                localStorage.setItem('token',response[0].token)
                return true;
              }
              return false;
            
          })
          
        )
      }

     public isLogin(){
          if(localStorage.getItem('token')){
              return true;
          }
          return false;
      }


      logout(){
        localStorage.removeItem('token')
        this.route.navigate(['/home'])
      }
    
    
    

}

