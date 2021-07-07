import { Store } from '@ngrx/store';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import * as RecipeActions from './recipes.actions';
import * as fromRecipe from './recipes.reducers';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {

  fetchrecipe = createEffect( () => {
    return this.action$.pipe(
      ofType(RecipeActions.FETCH_RECIPE),
      switchMap((action : RecipeActions.FetchRecipe) => {
         return this.http.get('https://fir-project-d7faf-default-rtdb.firebaseio.com/recipe.json',{
          reportProgress : true,
          observe : 'body'}
          )
      }),
      map((res : Recipe[])=> {
        console.log(res);
        for(let recipe of res)
          {
            if(!recipe['ingredients'])
               recipe['ingredients'] = [];
          }
        return {
          type : RecipeActions.SET_RECIPES,
          payload : res
        }

         }
      )
    )});

    storerecipe = createEffect( () => {
      return this.action$.pipe(
        ofType(RecipeActions.STORE_RECIPE),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([action, state]) => {
          const req = new HttpRequest('PUT','https://fir-project-d7faf-default-rtdb.firebaseio.com/recipe.json', state.recipes );
          console.log('stored');
          return this.http.request(req);
        })
      )
    },
       {dispatch : false}

    );


  constructor(private action$ : Actions,
    private http : HttpClient,
    private store : Store<fromRecipe.FeatureState>
    ){}
}
