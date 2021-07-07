import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromapp from '../../app.reducers';
import * as fromauth from '../../auth/store/auth.reducers'
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipes.actions';
import * as ShopActions from '../../shopping-list/store/shopaction.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState : Observable<fromauth.State>;
  constructor(private store : Store<fromapp.AppState>){}

  ngOnInit(): void {
     this.authState = this.store.select('auth');
  }

  savedata(){
    this.store.dispatch(new RecipeActions.StoreRecipe());
    this.store.dispatch(new ShopActions.StoreList());

  }

  fetchdata(){
      this.store.dispatch(new RecipeActions.FetchRecipe());
      this.store.dispatch(new ShopActions.FetchList());

  }

  logout(){
    this.store.dispatch(new AuthActions.LogOut());
  }
}
