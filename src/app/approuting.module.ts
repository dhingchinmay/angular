import { HomeComponent } from './core/home/home.component';
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const approutes : Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', loadChildren: ()=> import('./recipes/recipes.module').then(m => m.RecipeModule)},
  { path: 'shopping-list', component: ShoppingListComponent},
];


@NgModule({
imports:[
  RouterModule.forRoot(approutes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })
],
exports:[
  RouterModule
]

})

export class AppRouting{

}
