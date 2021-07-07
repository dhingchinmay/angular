import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

const authroutes : Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
];


@NgModule({
imports:[
  RouterModule.forChild(authroutes)
],
exports:[
  RouterModule
]

})

export class AuthRouting{

}
