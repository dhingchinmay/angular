import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard.service";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipesComponent } from "./recipes.component";
import { RecstartComponent } from "./recstart/recstart.component";


const recroutes : Routes = [
  { path: '', component: RecipesComponent , children:[
     { path: '', component: RecstartComponent},
     { path: 'new', component: EditRecipeComponent , canActivate: [AuthGuard]},
     { path: ':id', component: RecipeDetailsComponent},
     { path: ':id/edit', component: EditRecipeComponent, canActivate: [AuthGuard]},
  ]},
];


@NgModule({
  imports:[
    RouterModule.forChild(recroutes)
  ],
  providers:[AuthGuard],
  exports:[
    RouterModule
  ]

})

export class RecipeRouting{}
