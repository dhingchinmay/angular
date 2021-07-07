import { Router } from '@angular/router';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
    authSignUp =  createEffect( () => {
      return this.action$.pipe(
        ofType(AuthActions.DO_SIGN_UP),
        map((action : AuthActions.DoSignUp) => {
           return action.payload
        }),
        switchMap((authData : {username:string, password: string}) => {
           return firebase.default.auth().createUserWithEmailAndPassword(authData.username, authData.password);
        }),
        switchMap(() => {
          return from(firebase.default.auth().currentUser.getIdToken());
        }),
        mergeMap((token: string) => {
          this.router.navigate(['/']);
          return [{
              type : AuthActions.SIGN_UP
          },
          {
            type : AuthActions.SET_TOKEN,
            payload : token
          }
        ]
        })

      )
    });

    authSignIn = createEffect(()=> {
      return this.action$.pipe(
        ofType(AuthActions.DO_SIGN_IN),
        map((action : AuthActions.DoSignIn) => action.payload),
        switchMap((authData : {username: string, password : string}) => {
          return firebase.default.auth().signInWithEmailAndPassword(authData.username , authData.password);
        } ),
        switchMap(() => {
          return from(firebase.default.auth().currentUser.getIdToken());
        }),
        mergeMap((token : string) =>{
          this.router.navigate(['/']);
          return [{
              type : AuthActions.SIGN_IN
          },
          {
            type : AuthActions.SET_TOKEN,
            payload : token
          }
        ]
        })
      )
    });

    // authLogout = createEffect(()=> {
    //   ofType(AuthActions.LOGOUT),
    //   do(()=>{
    //     this.router.navigate(['/']);
    //   })
    // });

    constructor(private action$ : Actions , private router : Router){}
}
