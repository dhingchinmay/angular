import { shoppingListActions, StartEdit } from './store/shopaction.actions';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as shoppingActions from './store/shopaction.actions';
import * as shoppingReducer from './store/shopping.reducers';
import * as fromApp from '../app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Observable<{ingredients : Ingredient[]}> ;

  constructor( private store : Store<fromApp.AppState>) { }

  ngOnInit(): void {
     this.ingredients = this.store.select('shoppingList');

  }
  onSelect(index : number)
  {
    this.store.dispatch(new shoppingActions.StartEdit(index));
  }



}
