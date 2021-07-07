import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddIngredients } from 'src/app/shopping-list/store/shopaction.actions';
import * as fromRecipe from '../store/recipes.reducers';
import * as recipeActions from '../store/recipes.actions';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recState : Observable<fromRecipe.State>;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store : Store<fromRecipe.FeatureState> ,
    ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((data: Params) =>
    {
      this.id = data['id'];
      this.recState = this.store.select('recipes');
    }
    );

  }

  onAddToSList(){
    this.recState.pipe(take(1))
    .subscribe((recState : fromRecipe.State) => {
      this.store.dispatch(new AddIngredients(recState.recipes[this.id].ingredients));
    })
  }

  delrecipe(){
    this.store.dispatch(new recipeActions.DeleteRecipe(+this.id));
    this.router.navigate(['recipes']);
  }

}
