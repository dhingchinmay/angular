import { Action } from '@ngrx/store';

export const DO_SIGN_UP = 'DO_SIGN_UP';
export const SIGN_UP = 'SIGN_UP';
export const DO_SIGN_IN = 'DO_SIGN_IN';
export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class DoSignUp implements Action{
  readonly type = DO_SIGN_UP;
  constructor(public payload : {username : string , password : string }){}
}
export class DoSignIn implements Action{
  readonly type = DO_SIGN_IN;
  constructor(public payload : {username : string , password : string }){}
}
export class SignUp implements Action{
  readonly type = SIGN_UP;
}
export class SignIn implements Action{
  readonly type = SIGN_IN;
}
export class LogOut implements Action{
  readonly type = LOGOUT;
}
export class SetToken implements Action{
  readonly type = SET_TOKEN;
  constructor( public payload : string){}
}

export type AuthAction = SignUp | SignIn | LogOut | SetToken ;
