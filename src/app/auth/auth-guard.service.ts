
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from "rxjs/operators";
import * as fromapp from '../app.reducers';
import * as fromauth from '../auth/store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate{
constructor(private store : Store<fromapp.AppState>){}

  canActivate(route: ActivatedRouteSnapshot, state : RouterStateSnapshot ){

     return this.store.select('auth').pipe(
       take(1),
       map((authstate: fromauth.State) => authstate.isAuthenticated));

  }
}
