import { Ingredient } from './../../shared/ingredient.model';
import * as shoppingActions from './shopaction.actions';


export interface State {
  ingredients : Ingredient[],
  editIngredient :  Ingredient,
  editIngredientIndex : number,
}

const initialState ={
  ingredients : [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Mangoes', 3),
    new Ingredient('Onion', 2)
  ],
  editIngredient :  null,
  editIngredientIndex : -1,
}
export function shoppingListReducer (state = initialState , action : shoppingActions.shoppingListActions) {

   switch(action.type){
     case shoppingActions.ADD_INGREDIENT :
       return {
         ...state,
         ingredients : [...state.ingredients , action.payload]
      }

      case shoppingActions.ADD_INGREDIENTS :
        return {
          ...state,
          ingredients : [...state.ingredients , ...action.payload]
      }
      case shoppingActions.SET_INGREDIENTS :
        return {
          ...state,
          ingredients : [...action.payload]
      }

      case shoppingActions.UPDATE_INGREDIENT :
        const ingred = state.ingredients[state.editIngredientIndex];
        const updatedingred = {...ingred , ...action.payload.ingredient};
        const ingreds = [...state.ingredients];
        ingreds[state.editIngredientIndex]  = updatedingred;
       return {
         ...state,
         ingredients : ingreds,
         editIngredient :null,
         editIngredientIndex : -1
      }

      case shoppingActions.DELETE_INGREDIENT :
        const ingredientss = [...state.ingredients];
        ingredientss.splice(state.editIngredientIndex, 1);
       return {
         ...state,
         ingredients : ingredientss,
         editIngredient :null,
         editIngredientIndex : -1
      }

      case shoppingActions.START_EDIT :
        const edingredient = {...state.ingredients[action.payload]};

       return {
         ...state,
         editIngredient :edingredient,
         editIngredientIndex : action.payload
      }

      case shoppingActions.STOP_EDIT :
       return {
         ...state,
         editIngredient :null,
         editIngredientIndex : -1
      }

     default:
       return state;
   }
}
