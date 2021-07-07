import {switchMap, take } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as fromapp from '../app.reducers';
import { Store } from '@ngrx/store';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
  constructor(private store : Store<fromapp.AppState> ){}

  intercept(req : HttpRequest<any> , next : HttpHandler) : Observable<HttpEvent<any>>{

    return this.store.select('auth')
    .pipe(take(1), switchMap(auth => {
      console.log(auth.token);
      const reqcopy = req.clone({params : req.params.append('auth', auth.token)});
      return next.handle(reqcopy);
    }));


  }
}
