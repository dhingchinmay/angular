import { Ingredient } from './../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import * as ShopActions from './shopaction.actions';
import * as fromApp from '../../app.reducers';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';


@Injectable()
export class ShoppingListEffects {

  fetchshoppinglist = createEffect( () => {
    return this.action$.pipe(
      ofType(ShopActions.FETCH_LIST),
      switchMap((action : ShopActions.FetchList) => {
         return this.http.get('https://fir-project-d7faf-default-rtdb.firebaseio.com/shoppinglist.json',{
          reportProgress : true,
          observe : 'body'}
          )
      }),
      map((res : Ingredient[])=> {
        console.log(res);

        return {
          type : ShopActions.SET_INGREDIENTS,
          payload : res
        }

         }
      )
    )});

    storeshoppinglist = createEffect( () => {
      return this.action$.pipe(
        ofType(ShopActions.STORE_LIST),
        withLatestFrom(this.store.select('shoppingList')),
        switchMap(([action, state]) => {
          const req = new HttpRequest('PUT','https://fir-project-d7faf-default-rtdb.firebaseio.com/shoppinglist.json', state.ingredients );
          console.log('stored');
          return this.http.request(req);
        })
      )
    },
       {dispatch : false}

    );


  constructor(private action$ : Actions,
    private http : HttpClient,
    private store : Store<fromApp.AppState>
    ){}
}
