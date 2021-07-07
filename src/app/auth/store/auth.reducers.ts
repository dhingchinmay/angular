import * as authActions from './auth.actions';

export interface State {
  token : string,
  isAuthenticated : boolean
}

export const initialState : State ={
  token : null,
  isAuthenticated : false
}

export function AuthReducer(state = initialState , action : authActions.AuthAction){

  switch(action.type){
    case authActions.SIGN_UP:
    case authActions.SIGN_IN:
      return {
        ...state,
        isAuthenticated : true,
      }

    case authActions.LOGOUT:
      return {
        ...state,
        token : null,
        isAuthenticated : false
      }

    case authActions.SET_TOKEN:
      return {
        ...state,
        token : action.payload
      }

    default:
      return state;
  }

}
