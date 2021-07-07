import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../recipe.model";
import * as recipeAction from './recipes.actions';
import * as fromApp from '../../app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes : State
}

export interface State {
  recipes : Recipe[]
}

const initialState ={
  recipes: [
    new Recipe('Pizza',
        'Delicious pizza',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe.jpg',
        [
          new Ingredient('Pizza Base' , 1),
          new Ingredient('Chilli Sauce' , 1),
          new Ingredient('Onion' , 3),
          new Ingredient('Cheese' , 2),
      ]
     ),
    new Recipe('Idli',
        'Yummy Idli',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mGHGA5-PpXDy10y2Zmc3xIRQXaGcL48Qzg&usqp=CAU',
        [
          new Ingredient('Suji' , 1),
          new Ingredient('Tomato' , 2),
          new Ingredient('Curd' , 1),
        ]
        ),
    new Recipe('Pasta',
        'Chicken Pasta',
         'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-bb82ba6.jpg?quality=90&resize=960,872',
         [
          new Ingredient('Pasta' , 1),
          new Ingredient('Tomato' , 3),
          new Ingredient('Chilli Powder' , 1),
        ]
         ),
  ]
}

export function recipeReducer(state = initialState, action : recipeAction.RecipeActions){
  switch (action.type) {
    case recipeAction.SET_RECIPES:
      return {
        ...state,
        recipes : [...action.payload]
      }

    case recipeAction.ADD_RECIPE:
      return {
          ...state,
          recipes : [...state.recipes , action.payload]
      }
    case recipeAction.UPDATE_RECIPE:
      const newrec = [...state.recipes];
      const olditem = state.recipes[action.payload.index];
      const upitem = {...olditem , ...action.payload.updatedrecipe};
      newrec[action.payload.index] = upitem;
      return {
        ...state,
        recipes : newrec
      }

    case recipeAction.DELETE_RECIPE:
      const oldrec = [...state.recipes];
      oldrec.splice(action.payload,1);
      return {
        ...state,
        recipes : oldrec
      }

    default:
      return state;
  }



}
