import { Ingredient } from './../../shared/ingredient.model';
import { Action } from "@ngrx/store";
import { FetchRecipe } from 'src/app/recipes/store/recipes.actions';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';
export const FETCH_LIST = 'FETCH_LIST';
export const STORE_LIST = 'STORE_LIST';

export class AddIngredient implements Action{
  readonly type = ADD_INGREDIENT;
  constructor(public payload : Ingredient){}
}

export class AddIngredients implements Action{
  readonly type = ADD_INGREDIENTS;
  constructor(public payload : Ingredient[]){}
}

export class SetIngredients implements Action{
  readonly type = SET_INGREDIENTS;
  constructor(public payload : Ingredient[]){}
}

export class UpdateIngredient implements Action{
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload : {ingredient : Ingredient}){}
}

export class DeleteIngredient implements Action{
  readonly type = DELETE_INGREDIENT;
  constructor(){}
}

export class StartEdit implements Action{
  readonly type = START_EDIT;
  constructor(public payload : number){}
}

export class StopEdit implements Action{
  readonly type = STOP_EDIT;
  constructor(){}
}

export class FetchList implements Action{
  readonly type = FETCH_LIST;
}

export class StoreList implements Action{
  readonly type = STORE_LIST;
  constructor(){}
}

export type shoppingListActions = AddIngredient | AddIngredients | SetIngredients | UpdateIngredient | DeleteIngredient | StartEdit | StopEdit | FetchList | StoreList;
