
import { Component, OnInit} from '@angular/core';
import {Observable } from 'rxjs';
import * as fromRecipe from '../store/recipes.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Observable<fromRecipe.State>;

  constructor(private store : Store<fromRecipe.FeatureState>) { }

  ngOnInit(): void {
    this.recipes = this.store.select('recipes');


  }




}
