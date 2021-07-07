import { take } from 'rxjs/operators';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import * as fromRecipe from '../store/recipes.reducers';
import * as recipeActions from '../store/recipes.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id: number;
  allowedit: boolean;

  constructor(private route: ActivatedRoute, private store : Store<fromRecipe.FeatureState>) { }
   rform : FormGroup;


  ngOnInit(): void {
      this.route.params.subscribe((params : Params) =>
      {
        this.id = +params['id'];
        this.allowedit = params['id'] != null;
        this.forminit();
      }
      )
  }

  private forminit()
  {
    let rname = '';
    let rdesc = '';
    let rimg = '';
    let ringredients = new FormArray([]);

    if(this.allowedit)
    {
      this.store.select('recipes').pipe(take(1))
      .subscribe((recState: fromRecipe.State) => {
        const recipe = recState.recipes[this.id];
        rname = recipe.name;
        rimg = recipe.imgPath;
        rdesc = recipe.description;
         if(recipe['ingredients'])
          {
          for(let ingred of recipe.ingredients)
          {
            ringredients.push(
            new FormGroup({
             'name' : new FormControl(ingred.name, Validators.required),
             'amount' : new FormControl(ingred.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
              })
            )
          }
          }
      })

    }

   this.rform = new FormGroup({
     'name' : new FormControl(rname, Validators.required),
     'imageurl' : new FormControl(rimg, Validators.required),
     'description' : new FormControl(rdesc, Validators.required),
     'ingredients' : ringredients,
   })
  }

  onSubmit(){
    const val = this.rform.value;
   const rec = new Recipe(val.name, val.description , val.imageurl, val.ingredients);
   if(this.allowedit)
   {
     this.store.dispatch(new recipeActions.UpdateRecipe({index: this.id ,updatedrecipe: rec}));
   }
   else{
     this.store.dispatch(new recipeActions.AddRecipe(rec));
   }
   this.rform.reset();
  }

  onaddingred(){
    (<FormArray>this.rform.get('ingredients')).push(new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'amount' : new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    }))
  }

  delingredient(index){
    (<FormArray>this.rform.get('ingredients')).removeAt(index);
  }

}
