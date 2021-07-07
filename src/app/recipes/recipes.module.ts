import { RecipeEffects } from './store/recipes.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../shared/shared.module';
import { RecipeRouting } from './recipe-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";
import { RecstartComponent } from "./recstart/recstart.component";
import { recipeReducer } from './store/recipes.reducers';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecstartComponent,
    EditRecipeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeRouting,
    SharedModule,
    StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipeEffects])
  ]
})
export class RecipeModule { }
